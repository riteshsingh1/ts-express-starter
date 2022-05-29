import { PAY_U_MONEY_KEY, PAY_U_MONEY_SALT } from '../config/app';
import * as crypto from 'crypto';

interface PaymentInitialization {
  txnid: string;
  amount: number;
  firstname: string;
  email: string;
  phone: string;
  productinfo: string;
  furl: string;
  surl: string;
  hash?: string;
}
/**
 * Prepare Payment Details
 * @param data {
 *  txnid: string;
  amount: number;
  firstname: string;
  email: string;
  phone: string;
  productinfo: string;
  furl: string;
  surl: string;
  hash?: string;}
 * @returns {isError: boolean,data:PaymentInitialization}
 */
const preparePaymentDetails = async (
  data: PaymentInitialization
): Promise<{
  isError: boolean;
  data?: PaymentInitialization;
}> => {
  const paymentDetails = {
    key: PAY_U_MONEY_KEY,
    txnid: data.txnid,
    amount: data.amount,
    firstname: data.firstname,
    email: data.email,
    phone: data.phone,
    productinfo: data.productinfo,
    furl: data.furl,
    surl: data.surl,
    hash: '',
  };
  const hashData = `${paymentDetails.key}|${paymentDetails.txnid}|${paymentDetails.amount}|${paymentDetails.productinfo}|${paymentDetails.firstname}|${paymentDetails.email}|||||||||||${PAY_U_MONEY_SALT}`;
  const hash = crypto.createHash('sha512');
  hash.update(hashData);
  paymentDetails.hash = hash.digest('hex');
  return { isError: false, data: paymentDetails };
};

export const payUmoneyHelper = {
  preparePaymentDetails,
};
