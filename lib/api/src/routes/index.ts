import { Router } from 'express';
import { getStateAndCityBasedOnPincode, Login, RetryOTP, VerifyOTP } from '../controllers/auth/AuthController';
import {
  checkIfMobileOrEmailAlreadyExists,
  checkPanFunction,
  GetUserInfo,
  metalBalanceFunction,
  updateUserAddressDetailsFunction,
  updateUserBankDetailsFunction,
  updateUserPhotoFunction,
  updateUserProfileFunction,
  validateUserEmailOrMobileFunction,
  VerifyOTPForProfileFunction,
} from '../controllers/auth/ProfileController';
import WelcomeToExpressApplication from '../controllers/WelcomeController';
import { authMiddleware } from '../utils/authMiddleware';
import { LogActivity } from '../utils/logActivity';
const router = Router();

// auth routes
router.get('', WelcomeToExpressApplication);
router.post('/login', LogActivity, Login);
router.post('/verify-otp', LogActivity, VerifyOTP);
router.post('/retry-otp', LogActivity, RetryOTP);
router.post('/validate-pincode', LogActivity, getStateAndCityBasedOnPincode);
// order routes
router.post('/me', authMiddleware, LogActivity, GetUserInfo);
// profile routes
router.post('/update-user-profile', authMiddleware, LogActivity, updateUserProfileFunction);
router.post('/check-pan', authMiddleware, LogActivity, checkPanFunction);
router.post('/send-profile-otp', authMiddleware, LogActivity, validateUserEmailOrMobileFunction);
router.post('/verify-profile-otp', authMiddleware, LogActivity, VerifyOTPForProfileFunction);
router.post('/check-for-duplicate-email-mobile', authMiddleware, LogActivity, checkIfMobileOrEmailAlreadyExists);
router.post('/update-user-address', authMiddleware, LogActivity, updateUserAddressDetailsFunction);
router.post('/update-user-bank-details', authMiddleware, LogActivity, updateUserBankDetailsFunction);
router.post('/update-user-photo', authMiddleware, LogActivity, updateUserPhotoFunction);
router.post('/metal-balance', authMiddleware, LogActivity, metalBalanceFunction);

export default router;
