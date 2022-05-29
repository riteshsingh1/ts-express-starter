import axios from 'axios'
import { CASHFREE_APP_ID, CASHFREE_ORDER_URL, CASHFREE_SECRET } from '../config/app'
import logger from './logger'

interface PaymentInitialization {
  txnid: string
  amount: number
  firstname: string
  email: string
  phone: string
  productinfo: string
  furl: string
  surl: string
  hash?: string
  customerId: string
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
  reqData: PaymentInitialization
): Promise<{
  isError: boolean
  data?: PaymentInitialization
}> => {
  try {
    const { data } = await axios.post(
      `${CASHFREE_ORDER_URL}`,
      {
        order_id: reqData.txnid,
        order_amount: reqData.amount,
        order_currency: 'INR',
        order_note: reqData.productinfo,
        customer_details: {
          customer_id: reqData.customerId,
          customer_email: reqData.email,
          customer_phone: reqData.phone,
        },
        order_meta: {
          return_url: reqData.surl,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-version': '2022-01-01',
          'x-client-id': CASHFREE_APP_ID!,
          'x-client-secret': CASHFREE_SECRET!,
        },
      }
    )
    return { isError: false, data }
  } catch (e: any) {
    logger.info({
      msg: 'sd',
      e,
    })
    return { isError: true }
  }
}

export const cashFreeHelper = {
  preparePaymentDetails,
}
