"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CASHFREE_APP_ID = exports.CASHFREE_SECRET = exports.CASHFREE_ORDER_URL = exports.FRONTEND_URL = exports.APP_URL = exports.PAY_U_MONEY_SALT = exports.PAY_U_MONEY_URL = exports.PAY_U_MONEY_KEY = exports.RAZORPAY_SECRET_ID = exports.RAZORPAY_KEY_ID = exports.SKIP_ACTIVITY = exports.REQUEST_RESPONSE_ENCRYPTION = exports.ALLOWED_HOSTS = exports.NODE_ENV = exports.LOG_LEVEL = exports.APP_SECRET = exports.PORT = void 0;
/**
 * Application Port
 */
exports.PORT = process.env.PORT;
/**
 * Application Secret
 */
exports.APP_SECRET = process.env.APP_SECRET;
/**
 * Log Level
 */
exports.LOG_LEVEL = process.env.LOG_LEVEL;
/**
 * Node Env
 */
exports.NODE_ENV = process.env.NODE_ENV;
/**
 * Allowed Hosts
 */
exports.ALLOWED_HOSTS = process.env.ALLOWED_HOSTS;
/**
 * Request response encryption
 */
exports.REQUEST_RESPONSE_ENCRYPTION = process.env.REQUEST_RESPONSE_ENCRYPTION;
/**
 * SkipActivity
 */
exports.SKIP_ACTIVITY = JSON.parse(process.env.SKIP_ACTIVITY || 'true');
/**
 * Razorpay Gateway Integration
 */
exports.RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || '';
/**
 * Razorpay Secret
 */
exports.RAZORPAY_SECRET_ID = process.env.RAZORPAY_SECRET_ID || '';
/**
 * PayU Money Details
 */
exports.PAY_U_MONEY_KEY = process.env.PAY_U_MONEY_KEY || '';
/**
 * PayU Money URL
 */
exports.PAY_U_MONEY_URL = process.env.PAY_U_MONEY_URL || '';
/**
 * PayU Money SALT
 */
exports.PAY_U_MONEY_SALT = process.env.PAY_U_MONEY_SALT || '';
/**
 * APP URL
 */
exports.APP_URL = process.env.APP_URL;
/**
 * Frontend URL
 */
exports.FRONTEND_URL = process.env.FRONTEND_URL;
/**
 * CASHFREE URL
 */
exports.CASHFREE_ORDER_URL = process.env.CASHFREE_ORDER_URL;
exports.CASHFREE_SECRET = process.env.CASHFREE_SECRET;
exports.CASHFREE_APP_ID = process.env.CASHFREE_APP_ID;
