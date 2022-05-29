/**
 * Application Port
 */
export const PORT = process.env.PORT
/**
 * Application Secret
 */
export const APP_SECRET = process.env.APP_SECRET
/**
 * Log Level
 */
export const LOG_LEVEL = process.env.LOG_LEVEL
/**
 * Node Env
 */
export const NODE_ENV = process.env.NODE_ENV
/**
 * Allowed Hosts
 */
export const ALLOWED_HOSTS = process.env.ALLOWED_HOSTS
/**
 * Request response encryption
 */
export const REQUEST_RESPONSE_ENCRYPTION = process.env.REQUEST_RESPONSE_ENCRYPTION
/**
 * SkipActivity
 */
export const SKIP_ACTIVITY = JSON.parse(process.env.SKIP_ACTIVITY || 'true')
/**
 * Razorpay Gateway Integration
 */
export const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || ''
/**
 * Razorpay Secret
 */
export const RAZORPAY_SECRET_ID = process.env.RAZORPAY_SECRET_ID || ''
/**
 * PayU Money Details
 */
export const PAY_U_MONEY_KEY = process.env.PAY_U_MONEY_KEY || ''
/**
 * PayU Money URL
 */
export const PAY_U_MONEY_URL = process.env.PAY_U_MONEY_URL || ''

/**
 * PayU Money SALT
 */
export const PAY_U_MONEY_SALT = process.env.PAY_U_MONEY_SALT || ''
/**
 * APP URL
 */
export const APP_URL = process.env.APP_URL
/**
 * Frontend URL
 */
export const FRONTEND_URL = process.env.FRONTEND_URL

/**
 * CASHFREE URL
 */
export const CASHFREE_ORDER_URL = process.env.CASHFREE_ORDER_URL
export const CASHFREE_SECRET = process.env.CASHFREE_SECRET
export const CASHFREE_APP_ID = process.env.CASHFREE_APP_ID
