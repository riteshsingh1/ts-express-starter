"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileController = void 0;
var errorCodes_1 = require("../../config/errorCodes");
var sms_1 = require("../../config/sms");
var registration_1 = __importDefault(require("../../emails/registration"));
var welcome_1 = __importDefault(require("../../emails/welcome"));
var Otp_1 = require("../../models/Otp");
var User_1 = require("../../models/User");
var helper_1 = require("../../utils/helper");
var logger_1 = __importDefault(require("../../utils/logger"));
var sms_2 = require("../../utils/sms");
var AuthValidations_1 = require("../../validations/AuthValidations");
var ProfileValidation_1 = require("../../validations/ProfileValidation");
/**
 * Get Information for loggedIn User
 * @param request AuthRequest
 * @param response response
 * @returns User / Error
 */
var GetUserInfo = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var user, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, User_1.getUserInformation)('userId', request.user)];
            case 1:
                user = _a.sent();
                return [2 /*return*/, (0, helper_1.successResponse)(request, response, errorCodes_1.ApplicationCodes.OK, user)];
            case 2:
                err_1 = _a.sent();
                return [2 /*return*/, (0, helper_1.errorResponse)(request, response, errorCodes_1.ErrorCodes.TECHNICAL_ERROR.CODE)];
            case 3: return [2 /*return*/];
        }
    });
}); };
/**
 * Update User Info
 * @param request AuthRequest
 * @param response Response
 * @returns Response
 */
var UpdateUserInfo = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var user, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, User_1.getUserInformation)('userId', request.user)];
            case 1:
                user = _a.sent();
                return [2 /*return*/, (0, helper_1.successResponse)(request, response, errorCodes_1.ApplicationCodes.OK, user)];
            case 2:
                err_2 = _a.sent();
                return [2 /*return*/, (0, helper_1.errorResponse)(request, response, errorCodes_1.ErrorCodes.TECHNICAL_ERROR.CODE)];
            case 3: return [2 /*return*/];
        }
    });
}); };
var updateUserProfileFunction = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, value, error, name_1, userdata, dob, panNumber, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                _a = ProfileValidation_1.UpdateUserPersonalDetailValidationSchema.validate(request.body), value = _a.value, error = _a.error;
                if (error) {
                    return [2 /*return*/, (0, helper_1.invalidResponse)(request, response, errorCodes_1.ErrorCodes.INVALID_DATA.CODE, error.details)];
                }
                name_1 = value.name, userdata = value.userdata, dob = value.dob, panNumber = value.panNumber;
                if (!(0, helper_1.isNumeric)(userdata)) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, User_1.updateUserProfile)(request.user, dob, name_1, 'mobile', userdata, panNumber)];
            case 1:
                _b.sent();
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, (0, User_1.updateUserProfile)(request.user, dob, name_1, 'email', userdata, panNumber)];
            case 3:
                _b.sent();
                _b.label = 4;
            case 4: return [2 /*return*/, (0, helper_1.successResponse)(request, response, errorCodes_1.ApplicationCodes.OK)];
            case 5:
                err_3 = _b.sent();
                logger_1.default.info('ERROR_IN_USER_PROFILE_UPDATE');
                return [2 /*return*/, (0, helper_1.errorResponse)(request, response, errorCodes_1.ErrorCodes.TECHNICAL_ERROR.CODE)];
            case 6: return [2 /*return*/];
        }
    });
}); };
/**
 * Check if a email is valid or not
 * @param request Request
 * @param response Response
 * @returns Response
 */
var validateUserEmailOrMobileFunction = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, value, error, userdata, generatedOtp, generatedOtp, err_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 7, , 8]);
                _a = ProfileValidation_1.validateUserEmailOrMobileValidationSchema.validate(request.body), value = _a.value, error = _a.error;
                if (error) {
                    return [2 /*return*/, (0, helper_1.invalidResponse)(request, response, errorCodes_1.ErrorCodes.INVALID_DATA.CODE, error.details)];
                }
                userdata = value.userdata;
                if (!(0, helper_1.isNumeric)(userdata)) return [3 /*break*/, 3];
                if (userdata.toString().length !== 10) {
                    return [2 /*return*/, (0, helper_1.invalidResponse)(request, response, errorCodes_1.ErrorCodes.INVALID_MOBILE_NUMBER.CODE)];
                }
                return [4 /*yield*/, (0, Otp_1.saveOtpModel)(userdata, 'mobile', 'VERIFY_USER_MOBILE_NUMBER')];
            case 1:
                generatedOtp = _b.sent();
                return [4 /*yield*/, (0, sms_2.sendOtp)(userdata, sms_1.VERIFY_USER_MOBILE_SMS_TEMPLATE.replace('$$$$', generatedOtp.otp.toString()))];
            case 2:
                _b.sent();
                return [2 /*return*/, (0, helper_1.successResponse)(request, response, errorCodes_1.ApplicationCodes.OK, {
                        token: generatedOtp.replyToken,
                    })];
            case 3: return [4 /*yield*/, (0, Otp_1.saveOtpModel)(userdata, 'email', 'VERIFY_USER_EMAIL_ADDRESS')];
            case 4:
                generatedOtp = _b.sent();
                return [4 /*yield*/, (0, registration_1.default)(userdata, generatedOtp.otp)];
            case 5:
                _b.sent();
                return [2 /*return*/, (0, helper_1.successResponse)(request, response, errorCodes_1.ApplicationCodes.OK, {
                        token: generatedOtp.replyToken,
                    })];
            case 6: return [3 /*break*/, 8];
            case 7:
                err_4 = _b.sent();
                logger_1.default.info('ERROR_IN_USER_EMAIL_OR_MOBILE_SCHEMA', err_4);
                return [2 /*return*/, (0, helper_1.errorResponse)(request, response, errorCodes_1.ErrorCodes.TECHNICAL_ERROR.CODE)];
            case 8: return [2 /*return*/];
        }
    });
}); };
/**
 * Verify OTP
 * @param request Request
 * @param response Response
 * @returns Response
 */
var VerifyOTPForProfileFunction = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, error, value, replyToken, otp, otpVerified, err_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = AuthValidations_1.VerifyOtpValidationSchema.validate(request.body), error = _a.error, value = _a.value;
                if (error) {
                    return [2 /*return*/, (0, helper_1.invalidResponse)(request, response, errorCodes_1.ErrorCodes.INVALID_DATA.CODE, error.details)];
                }
                replyToken = value.replyToken, otp = value.otp;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 13, , 14]);
                return [4 /*yield*/, (0, Otp_1.VerifyOtpFromDatabase)(replyToken, otp)];
            case 2:
                otpVerified = _b.sent();
                if (!otpVerified) return [3 /*break*/, 11];
                if (!(otpVerified && otpVerified.expireAt >= Date.now())) return [3 /*break*/, 8];
                if (!(otpVerified.purpose === 'VERIFY_USER_EMAIL_ADDRESS')) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, User_1.updateUserEmail)(request.user, otpVerified.userdata)];
            case 3:
                _b.sent();
                (0, welcome_1.default)(otpVerified.userdata);
                return [3 /*break*/, 6];
            case 4: return [4 /*yield*/, (0, User_1.updateUserMobile)(request.user, otpVerified.userdata)];
            case 5:
                _b.sent();
                _b.label = 6;
            case 6: return [4 /*yield*/, (0, Otp_1.deleteOtpModel)(otpVerified._id)];
            case 7:
                _b.sent();
                return [2 /*return*/, (0, helper_1.successResponse)(request, response, errorCodes_1.ApplicationCodes.OK)];
            case 8: return [4 /*yield*/, (0, Otp_1.deleteOtpModel)(otpVerified._id)];
            case 9:
                _b.sent();
                return [2 /*return*/, (0, helper_1.invalidResponse)(request, response, errorCodes_1.ErrorCodes.OTP_EXPIRED.CODE)];
            case 10: return [3 /*break*/, 12];
            case 11: return [2 /*return*/, (0, helper_1.invalidResponse)(request, response, errorCodes_1.ErrorCodes.OTP_DOES_NOT_MATCH.CODE)];
            case 12: return [3 /*break*/, 14];
            case 13:
                err_5 = _b.sent();
                logger_1.default.error('USERMS::ERROR_IN_VERIFY_OTP_API_PROFILE', err_5);
                return [2 /*return*/, (0, helper_1.errorResponse)(request, response, errorCodes_1.ErrorCodes.TECHNICAL_ERROR.CODE)];
            case 14: return [2 /*return*/];
        }
    });
}); };
/**
 * Check if email or mobile already exists
 * @param request Request
 * @param response Response
 * @returns Response
 */
var checkIfMobileOrEmailAlreadyExists = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, error, value, userdata, _b, _c, _d, _e;
    var _f, _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = ProfileValidation_1.validateUserEmailOrMobileValidationSchema.validate(request.body), error = _a.error, value = _a.value;
                if (error) {
                    return [2 /*return*/, (0, helper_1.invalidResponse)(request, response, errorCodes_1.ErrorCodes.INVALID_DATA.CODE, error.details)];
                }
                userdata = value.userdata;
                if (!(0, helper_1.isNumeric)(userdata)) return [3 /*break*/, 2];
                _b = helper_1.successResponse;
                _c = [request, response, errorCodes_1.ApplicationCodes.OK];
                _f = {};
                return [4 /*yield*/, (0, User_1.checkIfMobileOrEmailAlreadyExistsModel)('mobile', userdata)];
            case 1: return [2 /*return*/, _b.apply(void 0, _c.concat([(_f.status = _h.sent(),
                        _f)]))];
            case 2:
                _d = helper_1.successResponse;
                _e = [request, response, errorCodes_1.ApplicationCodes.OK];
                _g = {};
                return [4 /*yield*/, (0, User_1.checkIfMobileOrEmailAlreadyExistsModel)('email', userdata)];
            case 3: return [2 /*return*/, _d.apply(void 0, _e.concat([(_g.status = _h.sent(),
                        _g)]))];
        }
    });
}); };
var updateUserBankDetailsFunction = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, error, value, bankName, accountName, ifsc, accountNumber, bankDetails, err_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ProfileValidation_1.validateUserBankDetailsValidationSchema.validate(request.body), error = _a.error, value = _a.value;
                if (error) {
                    return [2 /*return*/, (0, helper_1.invalidResponse)(request, response, errorCodes_1.ErrorCodes.INVALID_DATA.CODE, error.details)];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                bankName = value.bankName, accountName = value.accountName, ifsc = value.ifsc, accountNumber = value.accountNumber;
                return [4 /*yield*/, (0, User_1.updateUserBankDetails)(request.user, bankName, accountName, ifsc, accountNumber)];
            case 2:
                bankDetails = _b.sent();
                return [2 /*return*/, (0, helper_1.successResponse)(request, response, errorCodes_1.ApplicationCodes.OK, bankDetails)];
            case 3:
                err_6 = _b.sent();
                return [2 /*return*/, (0, helper_1.errorResponse)(request, response, errorCodes_1.ErrorCodes.TECHNICAL_ERROR.CODE)];
            case 4: return [2 /*return*/];
        }
    });
}); };
var updateUserPhotoFunction = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, error, value, photo, bankDetails, err_7;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ProfileValidation_1.validateUserPhotoValidationSchema.validate(request.body), error = _a.error, value = _a.value;
                if (error) {
                    return [2 /*return*/, (0, helper_1.invalidResponse)(request, response, errorCodes_1.ErrorCodes.INVALID_DATA.CODE, error.details)];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                photo = value.photo;
                return [4 /*yield*/, (0, User_1.updateUserPhoto)(request.user, photo)];
            case 2:
                bankDetails = _b.sent();
                return [2 /*return*/, (0, helper_1.successResponse)(request, response, errorCodes_1.ApplicationCodes.OK, bankDetails)];
            case 3:
                err_7 = _b.sent();
                return [2 /*return*/, (0, helper_1.errorResponse)(request, response, errorCodes_1.ErrorCodes.TECHNICAL_ERROR.CODE)];
            case 4: return [2 /*return*/];
        }
    });
}); };
var updateUserAddressDetailsFunction = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, error, value, line1, line2, pincode, state, city, addressDetails, err_8;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ProfileValidation_1.validateUserAddressDetailsValidationSchema.validate(request.body), error = _a.error, value = _a.value;
                if (error) {
                    return [2 /*return*/, (0, helper_1.invalidResponse)(request, response, errorCodes_1.ErrorCodes.INVALID_DATA.CODE, error.details)];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                line1 = value.line1, line2 = value.line2, pincode = value.pincode, state = value.state, city = value.city;
                return [4 /*yield*/, (0, User_1.updateUserAddress)(request.user, line1, line2, pincode, state, city)];
            case 2:
                addressDetails = _b.sent();
                return [2 /*return*/, (0, helper_1.successResponse)(request, response, errorCodes_1.ApplicationCodes.OK, addressDetails)];
            case 3:
                err_8 = _b.sent();
                return [2 /*return*/, (0, helper_1.errorResponse)(request, response, errorCodes_1.ErrorCodes.TECHNICAL_ERROR.CODE)];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.profileController = {
    GetUserInfo: GetUserInfo,
    UpdateUserInfo: UpdateUserInfo,
    updateUserProfileFunction: updateUserProfileFunction,
    validateUserEmailOrMobileFunction: validateUserEmailOrMobileFunction,
    VerifyOTPForProfileFunction: VerifyOTPForProfileFunction,
    checkIfMobileOrEmailAlreadyExists: checkIfMobileOrEmailAlreadyExists,
    updateUserBankDetailsFunction: updateUserBankDetailsFunction,
    updateUserPhotoFunction: updateUserPhotoFunction,
    updateUserAddressDetailsFunction: updateUserAddressDetailsFunction,
};
