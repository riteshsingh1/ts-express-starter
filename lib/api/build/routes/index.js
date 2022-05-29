"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AuthController_1 = require("../controllers/auth/AuthController");
var ProfileController_1 = require("../controllers/auth/ProfileController");
var WelcomeController_1 = require("../controllers/WelcomeController");
var authMiddleware_1 = require("../utils/authMiddleware");
var logActivity_1 = require("../utils/logActivity");
var router = (0, express_1.Router)();
// auth routes
router.get('', WelcomeController_1.welcomeController.WelcomeToExpressApplication);
router.post('/login', logActivity_1.LogActivity, AuthController_1.authController.Login);
router.post('/verify-otp', logActivity_1.LogActivity, AuthController_1.authController.VerifyOTP);
router.post('/retry-otp', logActivity_1.LogActivity, AuthController_1.authController.RetryOTP);
router.post('/validate-pincode', logActivity_1.LogActivity, AuthController_1.authController.getStateAndCityBasedOnPincode);
// order routes
router.post('/me', authMiddleware_1.authMiddleware, logActivity_1.LogActivity, ProfileController_1.profileController.GetUserInfo);
// profile routes
router.post('/update-user-profile', authMiddleware_1.authMiddleware, logActivity_1.LogActivity, ProfileController_1.profileController.updateUserProfileFunction);
router.post('/send-profile-otp', authMiddleware_1.authMiddleware, logActivity_1.LogActivity, ProfileController_1.profileController.validateUserEmailOrMobileFunction);
router.post('/verify-profile-otp', authMiddleware_1.authMiddleware, logActivity_1.LogActivity, ProfileController_1.profileController.VerifyOTPForProfileFunction);
router.post('/check-for-duplicate-email-mobile', authMiddleware_1.authMiddleware, logActivity_1.LogActivity, ProfileController_1.profileController.checkIfMobileOrEmailAlreadyExists);
router.post('/update-user-address', authMiddleware_1.authMiddleware, logActivity_1.LogActivity, ProfileController_1.profileController.updateUserAddressDetailsFunction);
router.post('/update-user-bank-details', authMiddleware_1.authMiddleware, logActivity_1.LogActivity, ProfileController_1.profileController.updateUserBankDetailsFunction);
router.post('/update-user-photo', authMiddleware_1.authMiddleware, logActivity_1.LogActivity, ProfileController_1.profileController.updateUserPhotoFunction);
exports.default = router;
