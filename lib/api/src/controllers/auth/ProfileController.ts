import axios from 'axios';
import { Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { VAULT_MS_HOST } from '../../config/app';
import { ApplicationCodes, ErrorCodes } from '../../config/errorCodes';
import { VERIFY_USER_MOBILE_SMS_TEMPLATE } from '../../config/sms';
import RegisterEmail from '../../emails/registration';
import WelcomeEmail from '../../emails/welcome';
import { deleteOtpModel, saveOtpModel, VerifyOtpFromDatabase } from '../../models/Otp';
import {
  checkIfMobileOrEmailAlreadyExistsModel,
  getUserInformation,
  updateUserAddress,
  updateUserBankDetails,
  updateUserEmail,
  updateUserMobile,
  updateUserPhoto,
  updateUserProfile,
} from '../../models/User';
import { AuthRequest } from '../../utils/authMiddleware';
import { encryptKyc, vaultDecryptString, vaultEncryptString } from '../../utils/encryption';
import { errorResponse, invalidResponse, isNumeric, successResponse } from '../../utils/helper';
import logger from '../../utils/logger';
import { sendOtp } from '../../utils/sms';
import { VerifyOtpValidationSchema } from '../../validations/AuthValidations';
import {
  CheckPanValidationSchema,
  UpdateUserPersonalDetailValidationSchema,
  validateUserAddressDetailsValidationSchema,
  validateUserBankDetailsValidationSchema,
  validateUserEmailOrMobileValidationSchema,
  validateUserPhotoValidationSchema,
} from '../../validations/ProfileValidation';

/**
 * Get Information for loggedIn User
 * @param request AuthRequest
 * @param response response
 * @returns User / Error
 */
export const GetUserInfo = async (request: AuthRequest, response: Response) => {
  try {
    const user = await getUserInformation('userId', request.user!);
    return successResponse(request, response, ApplicationCodes.OK, user);
  } catch (err) {
    return errorResponse(request, response, ErrorCodes.TECHNICAL_ERROR.CODE);
  }
};
/**
 * Update User Info
 * @param request AuthRequest
 * @param response Response
 * @returns Response
 */
export const UpdateUserInfo = async (request: AuthRequest, response: Response) => {
  try {
    const user = await getUserInformation('userId', request.user!);
    return successResponse(request, response, ApplicationCodes.OK, user);
  } catch (err) {
    return errorResponse(request, response, ErrorCodes.TECHNICAL_ERROR.CODE);
  }
};

export const updateUserProfileFunction = async (request: AuthRequest, response: Response) => {
  try {
    const { value, error } = UpdateUserPersonalDetailValidationSchema.validate(request.body);
    if (error) {
      return invalidResponse(request, response, ErrorCodes.INVALID_DATA.CODE, error.details);
    }
    const { name, userdata, dob, panNumber } = value;
    if (isNumeric(userdata)) {
      await updateUserProfile(request.user!, dob, name, 'mobile', userdata, panNumber);
    } else {
      await updateUserProfile(request.user!, dob, name, 'email', userdata, panNumber);
    }
    return successResponse(request, response, ApplicationCodes.OK);
  } catch (err: any) {
    logger.info('ERROR_IN_USER_PROFILE_UPDATE');
    return errorResponse(request, response, ErrorCodes.TECHNICAL_ERROR.CODE);
  }
};

/**
 * Check If a pan is valid or not
 * @param request request
 * @param response response
 * @returns Response
 */
export const checkPanFunction = async (request: AuthRequest, response: Response) => {
  const { error, value } = CheckPanValidationSchema.validate(request.body);
  if (error) {
    return invalidResponse(request, response, ErrorCodes.INVALID_DATA.CODE, error.details);
  }
  const txnm = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
  // validate panNumber
  const requestData = encryptKyc(
    `{ transID: '${txnm}', docType: '357', Name:"Ritesh", panNumber: '${value.panNumber}' }`
  );
  axios
    .post(
      'https://www.truthscreen.com/PanNameMatch/request',
      {
        requestData: requestData,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          username: 'prod.bd@authbridge.com',
        },
      }
    )
    .then((response) => {
      logger.info(response);
    })
    .catch((err) => {
      logger.info({
        msg: 'Error',
        codessss: err,
      });
    });
  setTimeout(() => {
    return successResponse(request, response, ApplicationCodes.OK);
  }, 2000);
};

/**
 * Check if a email is valid or not
 * @param request Request
 * @param response Response
 * @returns Response
 */
export const validateUserEmailOrMobileFunction = async (request: AuthRequest, response: Response) => {
  try {
    const { value, error } = validateUserEmailOrMobileValidationSchema.validate(request.body);
    if (error) {
      return invalidResponse(request, response, ErrorCodes.INVALID_DATA.CODE, error.details);
    }
    const { userdata } = value;
    if (isNumeric(userdata)) {
      if (userdata.toString().length !== 10) {
        return invalidResponse(request, response, ErrorCodes.INVALID_MOBILE_NUMBER.CODE);
      }
      const generatedOtp = await saveOtpModel(userdata, 'mobile', 'VERIFY_USER_MOBILE_NUMBER');
      await sendOtp(userdata, VERIFY_USER_MOBILE_SMS_TEMPLATE.replace('$$$$', generatedOtp.otp.toString()));
      return successResponse(request, response, ApplicationCodes.OK, {
        token: generatedOtp.replyToken,
      });
    } else {
      const generatedOtp = await saveOtpModel(userdata, 'email', 'VERIFY_USER_EMAIL_ADDRESS');
      await RegisterEmail(userdata, generatedOtp.otp);
      return successResponse(request, response, ApplicationCodes.OK, {
        token: generatedOtp.replyToken,
      });
    }
  } catch (err: any) {
    logger.info('ERROR_IN_USER_EMAIL_OR_MOBILE_SCHEMA', err);
    return errorResponse(request, response, ErrorCodes.TECHNICAL_ERROR.CODE);
  }
};

/**
 * Verify OTP
 * @param request Request
 * @param response Response
 * @returns Response
 */
export const VerifyOTPForProfileFunction = async (request: AuthRequest, response: Response) => {
  const { error, value } = VerifyOtpValidationSchema.validate(request.body);
  if (error) {
    return invalidResponse(request, response, ErrorCodes.INVALID_DATA.CODE, error.details);
  }
  const { replyToken, otp } = value;
  try {
    const otpVerified = await VerifyOtpFromDatabase(replyToken, otp);
    if (otpVerified) {
      if (otpVerified && otpVerified.expireAt >= Date.now()) {
        if (otpVerified.purpose === 'VERIFY_USER_EMAIL_ADDRESS') {
          await updateUserEmail(request.user!, otpVerified.userdata);
          WelcomeEmail(otpVerified.userdata);
        } else {
          await updateUserMobile(request.user!, otpVerified.userdata);
        }
        await deleteOtpModel(otpVerified._id!);
        return successResponse(request, response, ApplicationCodes.OK);
      } else {
        await deleteOtpModel(otpVerified._id!);
        return invalidResponse(request, response, ErrorCodes.OTP_EXPIRED.CODE);
      }
    } else {
      return invalidResponse(request, response, ErrorCodes.OTP_DOES_NOT_MATCH.CODE);
    }
  } catch (err: any) {
    logger.error('USERMS::ERROR_IN_VERIFY_OTP_API_PROFILE', err);
    return errorResponse(request, response, ErrorCodes.TECHNICAL_ERROR.CODE);
  }
};

/**
 * Check if email or mobile already exists
 * @param request Request
 * @param response Response
 * @returns Response
 */
export const checkIfMobileOrEmailAlreadyExists = async (request: AuthRequest, response: Response) => {
  const { error, value } = validateUserEmailOrMobileValidationSchema.validate(request.body);
  if (error) {
    return invalidResponse(request, response, ErrorCodes.INVALID_DATA.CODE, error.details);
  }
  const { userdata } = value;
  if (isNumeric(userdata)) {
    return successResponse(request, response, ApplicationCodes.OK, {
      status: await checkIfMobileOrEmailAlreadyExistsModel('mobile', userdata),
    });
  } else {
    return successResponse(request, response, ApplicationCodes.OK, {
      status: await checkIfMobileOrEmailAlreadyExistsModel('email', userdata),
    });
  }
};

export const updateUserBankDetailsFunction = async (request: AuthRequest, response: Response) => {
  const { error, value } = validateUserBankDetailsValidationSchema.validate(request.body);
  if (error) {
    return invalidResponse(request, response, ErrorCodes.INVALID_DATA.CODE, error.details);
  }
  try {
    const { bankName, accountName, ifsc, accountNumber } = value;
    const bankDetails = await updateUserBankDetails(request.user!, bankName, accountName, ifsc, accountNumber);
    return successResponse(request, response, ApplicationCodes.OK, bankDetails);
  } catch (err) {
    return errorResponse(request, response, ErrorCodes.TECHNICAL_ERROR.CODE);
  }
};

export const updateUserPhotoFunction = async (request: AuthRequest, response: Response) => {
  const { error, value } = validateUserPhotoValidationSchema.validate(request.body);
  if (error) {
    return invalidResponse(request, response, ErrorCodes.INVALID_DATA.CODE, error.details);
  }
  try {
    const { photo } = value;
    const bankDetails = await updateUserPhoto(request.user!, photo);
    return successResponse(request, response, ApplicationCodes.OK, bankDetails);
  } catch (err) {
    return errorResponse(request, response, ErrorCodes.TECHNICAL_ERROR.CODE);
  }
};

export const updateUserAddressDetailsFunction = async (request: AuthRequest, response: Response) => {
  const { error, value } = validateUserAddressDetailsValidationSchema.validate(request.body);
  if (error) {
    return invalidResponse(request, response, ErrorCodes.INVALID_DATA.CODE, error.details);
  }
  try {
    const { line1, line2, pincode, state, city } = value;
    const addressDetails = await updateUserAddress(request.user!, line1, line2, pincode, state, city);
    return successResponse(request, response, ApplicationCodes.OK, addressDetails);
  } catch (err) {
    return errorResponse(request, response, ErrorCodes.TECHNICAL_ERROR.CODE);
  }
};

/**
 * @method metalBalanceFunction
 * @param request AuthRequest
 * @param response Response
 * @returns Return Vault Balance Information
 */
export const metalBalanceFunction = async (request: AuthRequest, response: Response) => {
  try {
    const vaultData = {
      customerId: request.user,
      apiName: 'WalletBalance',
    };
    const p = vaultEncryptString(JSON.stringify(vaultData));
    axios
      .post(`${VAULT_MS_HOST}/wallet-balance`, {
        journeyId: request.body.journeyId,
        apiName: 'WalletBalance',
        payload: p,
      })
      .then((respp) => {
        return successResponse(request, response, ApplicationCodes.OK, JSON.parse(vaultDecryptString(respp.data.data)));
      });
  } catch (e: any) {
    return errorResponse(request, response, ErrorCodes.TECHNICAL_ERROR.CODE);
  }
};
