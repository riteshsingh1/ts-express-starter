import { Schema, model } from 'mongoose';

interface IUser {
  _id?: string;
  name?: string;
  email?: string;
  mobile?: string;
  photo?: string;
  userId: string;
  isAddressCompleted: boolean;
  isKycDone: boolean;
  isPanUploaded: boolean;
  isEmailVerified?: boolean;
  isMobileVerified?: boolean;
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
  isAddressCompleted: { type: Boolean, default: false },
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
