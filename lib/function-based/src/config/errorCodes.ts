export const ErrorCodes = {
  TECHNICAL_ERROR: {
    CODE: 'TECHNICAL_ERROR',
    MESSAGE: 'Something went wrong. Please try again later.',
  },
  UNAUTHORIZED_USER: {
    CODE: 'UNAUTHORIZED_USER',
    MESSAGE: 'Unauthorized user.',
  },
  EMAIL_ALREADY_EXISTS: {
    CODE: 'EMAIL_ALREADY_EXISTS',
    MESSAGE: 'This email id already exists.',
  },
  MOBILE_ALREADY_EXISTS: {
    CODE: 'MOBILE_ALREADY_EXISTS',
    MESSAGE: 'This mobile number already exists.',
  },
  EMAIL_DOES_NOT_EXISTS: {
    CODE: 'EMAIL_DOES_NOT_EXISTS',
    MESSAGE: 'This email id does not exists.',
  },
  MOBILE_DOES_NOT_EXISTS: {
    CODE: 'MOBILE_DOES_NOT_EXISTS',
    MESSAGE: 'You Must Signup Before Signin.',
  },
  OTP_EXPIRED: {
    CODE: 'OTP_EXPIRED',
    MESSAGE: 'This otp has been expired.',
  },
  OTP_DOES_NOT_MATCH: {
    CODE: 'OTP_DOES_NOT_MATCH',
    MESSAGE: 'The otp does not match.',
  },
  INVALID_EMAIL_PASSWORD: {
    CODE: 'INVALID_EMAIL_PASSWORD',
    MESSAGE: 'Invalid email or password',
  },
  INVALID_REPLY_TOKEN: {
    CODE: 'INVALID_REPLY_TOKEN',
    MESSAGE: 'Invalid reply token',
  },
  INVALID_DATA: {
    CODE: 'INVALID_DATA',
    MESSAGE: 'Invalid data',
  },
  INVALID_MOBILE_NUMBER: {
    CODE: 'INVALID_MOBILE_NUMBER',
    MESSAGE: 'Invalid mobile number',
  },
  INVALID_EMAIL_ID: {
    CODE: 'INVALID_EMAIL_ID',
    MESSAGE: 'Please enter a valid email address',
  },
  INVALID_PRICE: {
    CODE: 'INVALID_PRICE',
    MESSAGE: 'Invalid gold/silver price',
  },
  OTP_RETRY_COUNT_REACHED: {
    CODE: 'OTP_RETRY_COUNT_REACHED',
    MESSAGE: 'Maximum OTP Retry Count Reached.',
  },
  TOKEN_EXPIRED_ERROR: {
    CODE: 'TOKEN_EXPIRED_ERROR',
    MESSAGE: 'Token Expired.',
  },
  INVALID_TOKEN: {
    CODE: 'INVALID_TOKEN',
    MESSAGE: 'Invalid Token.',
  },
  OTP_TIMEOUT_REACHED: {
    CODE: 'OTP_TIMEOUT_REACHED',
    MESSAGE:
      "You have entered 3 incorrect OTP's. Due to security reasons,You are blocked for logging into your account for 1 hour.Please retry after 1 hour.",
  },
}

export const ApplicationCodes = {
  EMAIL_VERIFICATION_SUBJECT: 'Please Verify Yout Email',
  PASSWORD_RESET_LINK_SUBJECT: 'Reset Your Password',
  PASSWORD_RESET_LINK_SENT_SUCCESSFULLY: 'Password Reset Link Sent Successfully',
  OK: 'success',
  USER_REGISTERED: 'Registratered Successfully',
  PASSWORD_CHANGED_SUCCESSFULLY: 'Password Updated Successfully',
  USER_EMAIL_OTP_SENT_SUCCESSFULLY:
    'An otp has been sent on your email $$$$.Please check your email. If you do not receive in inbox, please check spam folders too.',
  USER_MOBILE_OTP_SENT_SUCCESSFULLY:
    'A 6 digit otp has been sent on your mobile number - $$$$.Please check your phone.',
  PROFILE_SETUP_SUCCESSFULLY: 'Your Profile has been setup successfully.',
  INVALID_DATA: 'Invalid Data',
  PROFILE_FETCH_SUCCESS: 'Profile Fetched Successfully.',
}
