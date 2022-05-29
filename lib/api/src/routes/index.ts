import { Router } from 'express'
import { authController } from '../controllers/auth/AuthController'
import { profileController } from '../controllers/auth/ProfileController'
import { welcomeController } from '../controllers/WelcomeController'
import { authMiddleware } from '../utils/authMiddleware'
import { LogActivity } from '../utils/logActivity'
const router = Router()

// auth routes
router.get('', welcomeController.WelcomeToExpressApplication)
router.post('/login', LogActivity, authController.Login)
router.post('/verify-otp', LogActivity, authController.VerifyOTP)
router.post('/retry-otp', LogActivity, authController.RetryOTP)
router.post('/validate-pincode', LogActivity, authController.getStateAndCityBasedOnPincode)
// order routes
router.post('/me', authMiddleware, LogActivity, profileController.GetUserInfo)
// profile routes
router.post('/update-user-profile', authMiddleware, LogActivity, profileController.updateUserProfileFunction)
router.post('/send-profile-otp', authMiddleware, LogActivity, profileController.validateUserEmailOrMobileFunction)
router.post('/verify-profile-otp', authMiddleware, LogActivity, profileController.VerifyOTPForProfileFunction)
router.post(
  '/check-for-duplicate-email-mobile',
  authMiddleware,
  LogActivity,
  profileController.checkIfMobileOrEmailAlreadyExists
)
router.post('/update-user-address', authMiddleware, LogActivity, profileController.updateUserAddressDetailsFunction)
router.post('/update-user-bank-details', authMiddleware, LogActivity, profileController.updateUserBankDetailsFunction)
router.post('/update-user-photo', authMiddleware, LogActivity, profileController.updateUserPhotoFunction)

export default router
