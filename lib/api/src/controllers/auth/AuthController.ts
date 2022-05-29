import { Request, Response } from 'express';
import { ApplicationCodes, ErrorCodes } from '../../config/errorCodes';
import { LOGIN_USER_SMS_TEMPLATE, REGISTER_USER_SMS_TEMPLATE } from '../../config/sms';
import {
  deleteOtpModel,
  getOtpModel,
  getOtpModelBasedOnUserData,
  increseOtpRetryCount,
  saveOtpModel,
  updateOtpPurpose,
  VerifyOtpFromDatabase,
} from '../../models/Otp';
import { checkIfMobileOrEmailAlreadyExistsModel, RegisterUser, User } from '../../models/User';
import { errorResponse, invalidResponse, isNumeric, isValidEmail, successResponse } from '../../utils/helper';
import { sendOtp } from '../../utils/sms';
import {
  LoginValidationSchema,
  RetryOtpValidationSchema,
  VerifyOtpValidationSchema,
} from '../../validations/AuthValidations';
import LoginEmail from '../../emails/login';
import RegisterEmail from '../../emails/registration';
import { sign } from 'jsonwebtoken';
import { APP_SECRET } from '../../config/app';
import logger from '../../utils/logger';
import axios from 'axios';
import WelcomeEmail from '../../emails/welcome';

/**
 * Login/Register User
 * @param request Request
 * @param response Response
 * @returns Response
 */
export const Login = async (request: Request, response: Response) => {
  const { error, value } = LoginValidationSchema.validate(request.body);
  if (error) {
    return invalidResponse(request, response, ErrorCodes.INVALID_DATA.CODE, error.details);
  }
  const { userdata } = value;
  try {
    // check otp retry count, if count is reached 3 then check time, if blocked for 1 hour then send error
    const otp = await getOtpModelBasedOnUserData(userdata);

    if (otp && otp.retryCount >= 2) {
      const newDate = Date.now() + 3600000;
      if (Date.now() < newDate) {
        return invalidResponse(request, response, ErrorCodes.OTP_TIMEOUT_REACHED.CODE);
      } else {
        await deleteOtpModel(otp._id!);
      }
    }
    // Mobile OTP
    if (isNumeric(userdata)) {
      if (userdata.toString().length !== 10) {
        return invalidResponse(request, response, ErrorCodes.INVALID_MOBILE_NUMBER.CODE);
      }
      const generatedOtp = await saveOtpModel(userdata, 'mobile', 'NEW_ACCOUNT_VIA_MOBILE');
      const user = await User.findOne({
        mobile: userdata,
      });
      if (!user) {
        await sendOtp(userdata, REGISTER_USER_SMS_TEMPLATE.replace('$$$$', generatedOtp.otp.toString()));
      } else {
        await updateOtpPurpose('EXISTING_ACCOUNT_VIA_MOBILE', generatedOtp._id!);
        await sendOtp(userdata, LOGIN_USER_SMS_TEMPLATE.replace('$$$$', generatedOtp.otp.toString()));
      }
      const responseMessage = ApplicationCodes.USER_MOBILE_OTP_SENT_SUCCESSFULLY.replace('$$$$', userdata);
      return successResponse(request, response, ApplicationCodes.OK, generatedOtp.replyToken, 200, responseMessage);
    }
    // Email OTP
    if (!isValidEmail(userdata)) {
      return invalidResponse(request, response, ErrorCodes.INVALID_EMAIL_ID.CODE);
    }
    const generatedOtp = await saveOtpModel(userdata, 'email', 'NEW_ACCOUNT_VIA_EMAIL');
    const user = await User.findOne({
      email: userdata,
    });
    if (!user) {
      RegisterEmail(userdata, generatedOtp.otp);
    } else {
      await updateOtpPurpose('EXISTING_ACCOUNT_VIA_EMAIL', generatedOtp._id!);
      LoginEmail(userdata, generatedOtp.otp);
    }
    const responseMessage = ApplicationCodes.USER_EMAIL_OTP_SENT_SUCCESSFULLY.replace('$$$$', userdata);
    return successResponse(request, response, ApplicationCodes.OK, generatedOtp.replyToken, 200, responseMessage);
  } catch (err: any) {
    logger.error('USERMS::ERROR_IN_LOGIN_REGISTER_API', err);
    return errorResponse(request, response, ErrorCodes.TECHNICAL_ERROR.CODE);
  }
};

/**
 * Verify OTP
 * @param request Request
 * @param response Response
 * @returns Response
 */
export const VerifyOTP = async (request: Request, response: Response) => {
  const { error, value } = VerifyOtpValidationSchema.validate(request.body);
  if (error) {
    return invalidResponse(request, response, ErrorCodes.INVALID_DATA.CODE, error.details);
  }
  const { replyToken, otp } = value;
  try {
    const otpVerified = await VerifyOtpFromDatabase(replyToken, otp);
    if (otpVerified) {
      if (otpVerified && otpVerified.expireAt >= Date.now()) {
        const key = otpVerified.emailOrMobile === 'email' ? 'email' : 'mobile';
        const emailVerified = key === 'email' ? true : false;
        const mobileVerified = key === 'mobile' ? true : false;
        if (['NEW_ACCOUNT_VIA_MOBILE', 'NEW_ACCOUNT_VIA_EMAIL'].includes(otpVerified.purpose)) {
          const user = await RegisterUser(key, otpVerified.userdata, emailVerified, mobileVerified);
          const token = sign({ uxid: user.userId }, APP_SECRET!, { expiresIn: '2h' });
          await deleteOtpModel(otpVerified._id!);
          if (otpVerified.purpose === 'NEW_ACCOUNT_VIA_EMAIL') {
            WelcomeEmail(otpVerified.userdata);
          }
          return successResponse(request, response, ApplicationCodes.OK, {
            token: token,
          });
        } else {
          const user = await checkIfMobileOrEmailAlreadyExistsModel(key, otpVerified.userdata);
          const token = sign({ uxid: user!.userId }, APP_SECRET!, { expiresIn: '2h' });
          await deleteOtpModel(otpVerified._id!);
          return successResponse(request, response, ApplicationCodes.OK, {
            token: token,
          });
        }
      } else {
        await deleteOtpModel(otpVerified._id!);
        return invalidResponse(request, response, ErrorCodes.OTP_EXPIRED.CODE);
      }
    } else {
      return invalidResponse(request, response, ErrorCodes.OTP_DOES_NOT_MATCH.CODE);
    }
  } catch (err: any) {
    logger.error('USERMS::ERROR_IN_VERIFY_OTP_API', err);
    return errorResponse(request, response, ErrorCodes.TECHNICAL_ERROR.CODE);
  }
};

/**
 * Retry OTP
 * @param request Request
 * @param response Response
 * @returns Respons
 */
export const RetryOTP = async (request: Request, response: Response) => {
  const { error, value } = RetryOtpValidationSchema.validate(request.body);
  if (error) {
    return invalidResponse(request, response, ErrorCodes.INVALID_DATA.CODE, error.details);
  }
  const { replyToken, journeyId } = value;
  const otpmodel = await getOtpModel(replyToken);
  if (otpmodel) {
    // check retry count
    if (otpmodel.retryCount >= 2) {
      return invalidResponse(request, response, ErrorCodes.OTP_RETRY_COUNT_REACHED.CODE);
    }
    // Email OTP
    if (otpmodel.emailOrMobile === 'email') {
      const newOtp = await increseOtpRetryCount(replyToken);
      if (newOtp) {
        if (otpmodel.purpose === 'EXISTING_ACCOUNT_VIA_EMAIL') {
          await LoginEmail(otpmodel.userdata, newOtp.otp);
        } else {
          await RegisterEmail(otpmodel.userdata, newOtp.otp);
        }
      }
      return successResponse(request, response, ApplicationCodes.OK, replyToken);
    }
    // Mobile OTP with validate
    if (otpmodel.emailOrMobile === 'mobile') {
      const newOtp = await increseOtpRetryCount(replyToken);
      if (newOtp) {
        if (otpmodel.purpose === 'EXISTING_ACCOUNT_VIA_MOBILE') {
          await sendOtp(parseInt(otpmodel.userdata), LOGIN_USER_SMS_TEMPLATE.replace('$$$$', newOtp?.otp.toString()));
        } else {
          await sendOtp(
            parseInt(otpmodel.userdata),
            REGISTER_USER_SMS_TEMPLATE.replace('$$$$', newOtp?.otp.toString())
          );
        }
      }
      return successResponse(request, response, ApplicationCodes.OK, replyToken);
    }
  } else {
    logger.error('USERMS::ERROR_IN_RETRY_OTP_API', { journeyId: journeyId });
    return errorResponse(request, response, ErrorCodes.TECHNICAL_ERROR.CODE);
  }
};

export const getStateAndCityBasedOnPincode = async (request: Request, response: Response) => {
  const { data } = await axios.get(`https://api.postalpincode.in/pincode/${request.body.pincode}`);
  if (data) {
    return successResponse(request, response, ApplicationCodes.OK, {
      state: data[0].PostOffice[0].State,
      city: data[0].PostOffice[0].District,
    });
  } else {
    return errorResponse(request, response, ErrorCodes.TECHNICAL_ERROR.CODE);
  }
};
