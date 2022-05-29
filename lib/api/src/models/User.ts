import { Schema, model } from 'mongoose';
import { maskAadhaarNumber, maskPanNumber } from '../utils/helper';
interface IUser {
  _id?: string;
  name?: string;
  email?: string;
  mobile?: string;
  photo?: string;
  userId: string;
  dob: string;
  isAddressCompleted: boolean;
  isKycDone: boolean;
  isPanUploaded: boolean;
  isEmailVerified?: boolean;
  isMobileVerified?: boolean;
  isBasicDetailsCompleted: boolean;
  isBankDetailsCompleted?: boolean;
  address?: {
    line1: string;
    line2?: string;
    pincode: number;
    state: string;
    city: string;
  };
  kyc?: {
    panNumber: string;
    aadhaarNumber?: string;
  };
  bankDetails?: {
    bankName: string;
    accountName: string;
    ifsc: string;
    accountNumber: string;
  };
  createdAt: number;
  updatedAt: number;
}

const userSchema = new Schema<IUser>({
  name: { type: String, default: 'user' },
  email: { type: String, default: '' },
  mobile: { type: String, default: '' },
  photo: { type: String, default: '' },
  userId: { type: String, required: true },
  dob: { type: String, required: true },
  isAddressCompleted: { type: Boolean, default: false },
  isBasicDetailsCompleted: { type: Boolean, default: false },
  isKycDone: { type: Boolean, default: false },
  isPanUploaded: { type: Boolean, default: false },
  isEmailVerified: { type: Boolean, default: false },
  isMobileVerified: { type: Boolean, default: false },
  isBankDetailsCompleted: { type: Boolean, default: false },
  address: {
    line1: { type: String, required: true, default: '' },
    line2: { type: String, required: true, default: '' },
    pincode: { type: Number, required: true, default: null },
    state: { type: String, required: true, default: '' },
    city: { type: String, required: true, default: '' },
  },
  kyc: {
    panNumber: { type: String, required: true, default: '' },
    aadhaarNumber: { type: String, required: false, default: '' },
  },
  bankDetails: {
    bankName: { type: String, required: true, default: '' },
    accountName: { type: String, required: true, default: '' },
    ifsc: { type: String, required: true, default: '' },
    accountNumber: { type: String, required: true, default: '' },
  },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

export const User = model<IUser>('User', userSchema);

/**
 * Register User
 * @param key string
 * @param value string
 * @param emailVerified boolean
 * @param mobileVerified boolean
 * @returns User
 */
export const RegisterUser = async (key: string, value: string, emailVerified: boolean, mobileVerified: boolean) => {
  const userId = `USER${Math.floor(Math.random() * 1000000000)}`;
  return User.create({
    [key]: value,
    userId: userId,
    dob: ' ',
    isAddressCompleted: false,
    isKycDone: false,
    isPanUploaded: false,
    isEmailVerified: emailVerified,
    isMobileVerified: mobileVerified,
    isBankDetailsCompleted: false,
    isBasicDetailsCompleted: false,
    address: {
      line1: ' ',
      line2: ' ',
      pincode: ' ',
      state: ' ',
      city: ' ',
    },
    kyc: {
      panNumber: ' ',
      aadhaarNumber: ' ',
    },
    bankDetails: {
      bankName: ' ',
      accountName: ' ',
      ifsc: ' ',
      accountNumber: ' ',
    },
  });
};

/**
 * Get User Information
 * @param key string | number
 * @param value string | number
 * @returns User
 */
export const getUserInformation = async (key: string | number, value: string | number) => {
  const user = await User.findOne({ [key]: value });
  if (user && user.isKycDone && user.kyc) {
    user.kyc.panNumber = maskPanNumber(user.kyc.panNumber);
    user.kyc.aadhaarNumber = maskAadhaarNumber(user.kyc.aadhaarNumber!);
  }
  return user;
};

export const updateUserProfile = async (
  userId: string,
  dob: string,
  name: string,
  userdata: string,
  value: string | number,
  panNumber?: string
) => {
  let insertObj: any = {
    name: name,
    [userdata]: value,
    isBasicDetailsCompleted: true,
    dob: dob,
    $set: {
      'kyc.panNumber': panNumber,
    },
  };
  if (panNumber) {
    insertObj = {
      name: name,
      [userdata]: value,
      isKycDone: true,
      isBasicDetailsCompleted: true,
      dob: dob,
      $set: {
        'kyc.panNumber': panNumber,
      },
    };
  }
  return await User.findOneAndUpdate({ userId: userId }, insertObj, {
    new: true,
  });
};

export const updateUserPhoto = async (userId: string, userPhoto: string) => {
  return await User.findOneAndUpdate(
    { userId: userId },
    {
      photo: userPhoto,
    },
    {
      new: true,
    }
  );
};

/**
 * Update the bank details
 * @param userId string | number
 * @param bankName string | number
 * @param accountName string
 * @param ifsc string
 * @param accountNumber string
 * @returns User object
 */
export const updateUserBankDetails = async (
  userId: string,
  bankName: string,
  accountName: string,
  ifsc: string,
  accountNumber: string
) => {
  const insertObj: any = {
    isBankDetailsCompleted: true,
    $set: {
      'bankDetails.bankName': bankName,
      'bankDetails.accountName': accountName,
      'bankDetails.accountNumber': accountNumber,
      'bankDetails.ifsc': ifsc,
    },
  };
  return await User.findOneAndUpdate({ userId: userId }, insertObj, {
    new: true,
  });
};

/**
 * Update user address information details
 * @param userId string | number
 * @param line1 string | number
 * @param line2 string
 * @param pincode string
 * @param state string
 * @param city string
 * @returns User object
 */
export const updateUserAddress = async (
  userId: string,
  line1: string,
  line2: string,
  pincode: number,
  state: string,
  city: string
) => {
  const insertObj: any = {
    isAddressCompleted: true,
    $set: {
      'address.line1': line1,
      'address.line2': line2,
      'address.pincode': pincode,
      'address.state': state,
      'address.city': city,
    },
  };
  return await User.findOneAndUpdate({ userId: userId }, insertObj, {
    new: true,
  });
};
/**
 * Get User Information
 * @param key string | number
 * @param value string | number
 * @returns User
 */
export const checkIfMobileOrEmailAlreadyExistsModel = async (key: string | number, value: string | number) => {
  return await User.findOne({ [key]: value });
};

/**
 * Update User email information
 * @param userId string
 * @param email string
 * @returns User object
 */
export const updateUserEmail = async (userId: string, email: string) => {
  return await User.findOneAndUpdate({ userId: userId }, { email: email });
};

/**
 * Update User mobile information
 * @param userId string
 * @param mobile string
 * @returns User object
 */
export const updateUserMobile = async (userId: string, mobile: string) => {
  return await User.findOneAndUpdate({ userId: userId }, { mobile: mobile });
};
