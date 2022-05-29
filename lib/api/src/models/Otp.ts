import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

interface IOtp {
  _id?: string;
  userdata: string;
  emailOrMobile: string;
  otp: string;
  purpose: string;
  retryCount: number;
  replyToken: string;
  createdAt: number;
  expireAt: number;
}

const OtpSchema = new Schema<IOtp>({
  userdata: { type: String, required: true },
  emailOrMobile: { type: String, required: true },
  otp: { type: String, required: true },
  purpose: { type: String, required: true },
  retryCount: { type: Number, required: true },
  replyToken: { type: String, required: true },
  createdAt: { type: Number, required: true },
  expireAt: { type: Number, required: true },
});
export const Otp = model<IOtp>('Otp', OtpSchema);

/**
 * Save Otp Model
 * @param userdata string
 * @param emailOrMobile string
 * @param purpose string
 * @returns IOtp
 */
export const saveOtpModel = async (userdata: string, emailOrMobile: string, purpose: string): Promise<IOtp> => {
  const generatedOtp = Math.floor(100000 + Math.random() * 900000);

  return await Otp.create({
    otp: generatedOtp,
    userdata,
    emailOrMobile,
    purpose,
    retryCount: 0,
    replyToken: uuidv4(),
    createdAt: Date.now(),
    expireAt: Date.now() + 300000,
  });
};

/**
 * Update Otp Purpose
 * @param purpose string
 * @param _id string | ObjectId
 * @returns Otp
 */
export const updateOtpPurpose = async (purpose: string, _id: string | Schema.Types.ObjectId) => {
  return await Otp.findByIdAndUpdate(_id, { purpose: purpose });
};
/**
 * Increse Otp Count
 * @param replyToken string
 * @returns Otp | void
 */
export const increseOtpRetryCount = async (replyToken: string) => {
  const otpmodel = await Otp.findOne({ replyToken });
  const generatedOtp = Math.floor(100000 + Math.random() * 900000);

  if (otpmodel) {
    return await Otp.findOneAndUpdate(
      { replyToken: replyToken },
      {
        otp: generatedOtp,
        retryCount: otpmodel?.retryCount + 1,
        createdAt: Date.now(),
        expireAt: Date.now() + 300000,
      },
      {
        new: true,
      }
    );
  }
  return otpmodel;
};

/**
 * Verify OTP from database based on replyToken and otp
 * @param replyToken string
 * @param otp string
 * @returns Otp
 */
export const VerifyOtpFromDatabase = async (replyToken: string, otp: string) => {
  return await Otp.findOne({ replyToken, otp });
};
/**
 * Get Otp model based on replyToken
 * @param replyToken string
 * @returns OtpModel
 */
export const getOtpModel = async (replyToken: string) => {
  return await Otp.findOne({ replyToken });
};

/**
 * Delete OTP From Database
 * @param _id string | Schema.Types.ObjectId
 * @returns OtpModel
 */
export const deleteOtpModel = async (_id: string | Schema.Types.ObjectId) => {
  return await Otp.findByIdAndDelete(_id);
};
/**
 * Get Otp Model based on user data
 * @param userdata string | number
 * @returns OtpModel
 */
export const getOtpModelBasedOnUserData = async (userdata: string | number) => {
  return await Otp.findOne({ userdata: userdata });
};
