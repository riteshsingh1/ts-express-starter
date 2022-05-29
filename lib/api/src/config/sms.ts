export const SMS_HOST = process.env.SMS_HOST;
export const SMS_METHOD = process.env.SMS_METHOD;
export const SMS_USERNAME = process.env.SMS_USERNAME;
export const SMS_PASSWORD = process.env.SMS_PASSWORD;
export const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
export const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
export const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
// sms templates
export const REGISTER_USER_SMS_TEMPLATE = `Welcome to Bright DiGi Gold. Please enter Otp $$$$, to continue.Please do not share this with anyone. This otp is valid for 5 minutes.`;
export const LOGIN_USER_SMS_TEMPLATE = `$$$$ is the otp for login into Bright DiGi Gold. Please do not share this with anyone. This otp is valid for 5 minutes.`;
export const VERIFY_USER_MOBILE_SMS_TEMPLATE = `$$$$ is the otp for verifying your mobile number in Bright DiGi Gold. Please do not share this with anyone. This otp is valid for 5 minutes.`;
