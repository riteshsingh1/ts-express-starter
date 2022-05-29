"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERIFY_USER_MOBILE_SMS_TEMPLATE = exports.LOGIN_USER_SMS_TEMPLATE = exports.REGISTER_USER_SMS_TEMPLATE = exports.TWILIO_PHONE_NUMBER = exports.TWILIO_AUTH_TOKEN = exports.TWILIO_ACCOUNT_SID = exports.SMS_PASSWORD = exports.SMS_USERNAME = exports.SMS_METHOD = exports.SMS_HOST = void 0;
exports.SMS_HOST = process.env.SMS_HOST;
exports.SMS_METHOD = process.env.SMS_METHOD;
exports.SMS_USERNAME = process.env.SMS_USERNAME;
exports.SMS_PASSWORD = process.env.SMS_PASSWORD;
exports.TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
exports.TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
exports.TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
// sms templates
exports.REGISTER_USER_SMS_TEMPLATE = "Welcome to Bright DiGi Gold. Please enter Otp $$$$, to continue.Please do not share this with anyone. This otp is valid for 5 minutes.";
exports.LOGIN_USER_SMS_TEMPLATE = "$$$$ is the otp for login into Bright DiGi Gold. Please do not share this with anyone. This otp is valid for 5 minutes.";
exports.VERIFY_USER_MOBILE_SMS_TEMPLATE = "$$$$ is the otp for verifying your mobile number in Bright DiGi Gold. Please do not share this with anyone. This otp is valid for 5 minutes.";
