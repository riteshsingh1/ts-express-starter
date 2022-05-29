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
exports.authController = void 0;
var errorCodes_1 = require("../../config/errorCodes");
var sms_1 = require("../../config/sms");
var Otp_1 = require("../../models/Otp");
var User_1 = require("../../models/User");
var helper_1 = require("../../utils/helper");
var sms_2 = require("../../utils/sms");
var AuthValidations_1 = require("../../validations/AuthValidations");
var login_1 = __importDefault(require("../../emails/login"));
var registration_1 = __importDefault(require("../../emails/registration"));
var jsonwebtoken_1 = require("jsonwebtoken");
var app_1 = require("../../config/app");
var logger_1 = __importDefault(require("../../utils/logger"));
var axios_1 = __importDefault(require("axios"));
var welcome_1 = __importDefault(require("../../emails/welcome"));
/**
 * Login/Register User
 * @param request Request
 * @param response Response
 * @returns Response
 */
var Login = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, error, value, userdata, otp, newDate, generatedOtp_1, user_1, responseMessage_1, generatedOtp, user, responseMessage, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = AuthValidations_1.LoginValidationSchema.validate(request.body), error = _a.error, value = _a.value;
                if (error) {
                    return [2 /*return*/, (0, helper_1.invalidResponse)(request, response, errorCodes_1.ErrorCodes.INVALID_DATA.CODE, error.details)];
                }
                userdata = value.userdata;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 19, , 20]);
                return [4 /*yield*/, (0, Otp_1.getOtpModelBasedOnUserData)(userdata)];
            case 2:
                otp = _b.sent();
                if (!(otp && otp.retryCount >= 2)) return [3 /*break*/, 5];
                newDate = Date.now() + 3600000;
                if (!(Date.now() < newDate)) return [3 /*break*/, 3];
                return [2 /*return*/, (0, helper_1.invalidResponse)(request, response, errorCodes_1.ErrorCodes.OTP_TIMEOUT_REACHED.CODE)];
            case 3: return [4 /*yield*/, (0, Otp_1.deleteOtpModel)(otp._id)];
            case 4:
                _b.sent();
                _b.label = 5;
            case 5:
                if (!(0, helper_1.isNumeric)(userdata)) return [3 /*break*/, 13];
                if (userdata.toString().length !== 10) {
                    return [2 /*return*/, (0, helper_1.invalidResponse)(request, response, errorCodes_1.ErrorCodes.INVALID_MOBILE_NUMBER.CODE)];
                }
                return [4 /*yield*/, (0, Otp_1.saveOtpModel)(userdata, 'mobile', 'NEW_ACCOUNT_VIA_MOBILE')];
            case 6:
                generatedOtp_1 = _b.sent();
                return [4 /*yield*/, User_1.User.findOne({
                        mobile: userdata,
                    })];
            case 7:
                user_1 = _b.sent();
                if (!!user_1) return [3 /*break*/, 9];
                return [4 /*yield*/, (0, sms_2.sendOtp)(userdata, sms_1.REGISTER_USER_SMS_TEMPLATE.replace('$$$$', generatedOtp_1.otp.toString()))];
            case 8:
                _b.sent();
                return [3 /*break*/, 12];
            case 9: return [4 /*yield*/, (0, Otp_1.updateOtpPurpose)('EXISTING_ACCOUNT_VIA_MOBILE', generatedOtp_1._id)];
            case 10:
                _b.sent();
                return [4 /*yield*/, (0, sms_2.sendOtp)(userdata, sms_1.LOGIN_USER_SMS_TEMPLATE.replace('$$$$', generatedOtp_1.otp.toString()))];
            case 11:
                _b.sent();
                _b.label = 12;
            case 12:
                responseMessage_1 = errorCodes_1.ApplicationCodes.USER_MOBILE_OTP_SENT_SUCCESSFULLY.replace('$$$$', userdata);
                return [2 /*return*/, (0, helper_1.successResponse)(request, response, errorCodes_1.ApplicationCodes.OK, generatedOtp_1.replyToken, 200, responseMessage_1)];
            case 13:
                // Email OTP
                if (!(0, helper_1.isValidEmail)(userdata)) {
                    return [2 /*return*/, (0, helper_1.invalidResponse)(request, response, errorCodes_1.ErrorCodes.INVALID_EMAIL_ID.CODE)];
                }
                return [4 /*yield*/, (0, Otp_1.saveOtpModel)(userdata, 'email', 'NEW_ACCOUNT_VIA_EMAIL')];
            case 14:
                generatedOtp = _b.sent();
                return [4 /*yield*/, User_1.User.findOne({
                        email: userdata,
                    })];
            case 15:
                user = _b.sent();
                if (!!user) return [3 /*break*/, 16];
                (0, registration_1.default)(userdata, generatedOtp.otp);
                return [3 /*break*/, 18];
            case 16: return [4 /*yield*/, (0, Otp_1.updateOtpPurpose)('EXISTING_ACCOUNT_VIA_EMAIL', generatedOtp._id)];
            case 17:
                _b.sent();
                (0, login_1.default)(userdata, generatedOtp.otp);
                _b.label = 18;
            case 18:
                responseMessage = errorCodes_1.ApplicationCodes.USER_EMAIL_OTP_SENT_SUCCESSFULLY.replace('$$$$', userdata);
                return [2 /*return*/, (0, helper_1.successResponse)(request, response, errorCodes_1.ApplicationCodes.OK, generatedOtp.replyToken, 200, responseMessage)];
            case 19:
                err_1 = _b.sent();
                logger_1.default.error('USERMS::ERROR_IN_LOGIN_REGISTER_API', err_1);
                return [2 /*return*/, (0, helper_1.errorResponse)(request, response, errorCodes_1.ErrorCodes.TECHNICAL_ERROR.CODE)];
            case 20: return [2 /*return*/];
        }
    });
}); };
/**
 * Verify OTP
 * @param request Request
 * @param response Response
 * @returns Response
 */
var VerifyOTP = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, error, value, replyToken, otp, otpVerified, key, emailVerified, mobileVerified, user, token, user, token, err_2;
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
                _b.trys.push([1, 14, , 15]);
                return [4 /*yield*/, (0, Otp_1.VerifyOtpFromDatabase)(replyToken, otp)];
            case 2:
                otpVerified = _b.sent();
                if (!otpVerified) return [3 /*break*/, 12];
                if (!(otpVerified && otpVerified.expireAt >= Date.now())) return [3 /*break*/, 9];
                key = otpVerified.emailOrMobile === 'email' ? 'email' : 'mobile';
                emailVerified = key === 'email' ? true : false;
                mobileVerified = key === 'mobile' ? true : false;
                if (!['NEW_ACCOUNT_VIA_MOBILE', 'NEW_ACCOUNT_VIA_EMAIL'].includes(otpVerified.purpose)) return [3 /*break*/, 5];
                return [4 /*yield*/, (0, User_1.RegisterUser)(key, otpVerified.userdata, emailVerified, mobileVerified)];
            case 3:
                user = _b.sent();
                token = (0, jsonwebtoken_1.sign)({ uxid: user.userId }, app_1.APP_SECRET, { expiresIn: '2h' });
                return [4 /*yield*/, (0, Otp_1.deleteOtpModel)(otpVerified._id)];
            case 4:
                _b.sent();
                if (otpVerified.purpose === 'NEW_ACCOUNT_VIA_EMAIL') {
                    (0, welcome_1.default)(otpVerified.userdata);
                }
                return [2 /*return*/, (0, helper_1.successResponse)(request, response, errorCodes_1.ApplicationCodes.OK, {
                        token: token,
                    })];
            case 5: return [4 /*yield*/, (0, User_1.checkIfMobileOrEmailAlreadyExistsModel)(key, otpVerified.userdata)];
            case 6:
                user = _b.sent();
                token = (0, jsonwebtoken_1.sign)({ uxid: user.userId }, app_1.APP_SECRET, { expiresIn: '2h' });
                return [4 /*yield*/, (0, Otp_1.deleteOtpModel)(otpVerified._id)];
            case 7:
                _b.sent();
                return [2 /*return*/, (0, helper_1.successResponse)(request, response, errorCodes_1.ApplicationCodes.OK, {
                        token: token,
                    })];
            case 8: return [3 /*break*/, 11];
            case 9: return [4 /*yield*/, (0, Otp_1.deleteOtpModel)(otpVerified._id)];
            case 10:
                _b.sent();
                return [2 /*return*/, (0, helper_1.invalidResponse)(request, response, errorCodes_1.ErrorCodes.OTP_EXPIRED.CODE)];
            case 11: return [3 /*break*/, 13];
            case 12: return [2 /*return*/, (0, helper_1.invalidResponse)(request, response, errorCodes_1.ErrorCodes.OTP_DOES_NOT_MATCH.CODE)];
            case 13: return [3 /*break*/, 15];
            case 14:
                err_2 = _b.sent();
                logger_1.default.error('USERMS::ERROR_IN_VERIFY_OTP_API', err_2);
                return [2 /*return*/, (0, helper_1.errorResponse)(request, response, errorCodes_1.ErrorCodes.TECHNICAL_ERROR.CODE)];
            case 15: return [2 /*return*/];
        }
    });
}); };
/**
 * Retry OTP
 * @param request Request
 * @param response Response
 * @returns Respons
 */
var RetryOTP = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, error, value, replyToken, journeyId, otpmodel, newOtp, newOtp;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = AuthValidations_1.RetryOtpValidationSchema.validate(request.body), error = _a.error, value = _a.value;
                if (error) {
                    return [2 /*return*/, (0, helper_1.invalidResponse)(request, response, errorCodes_1.ErrorCodes.INVALID_DATA.CODE, error.details)];
                }
                replyToken = value.replyToken, journeyId = value.journeyId;
                return [4 /*yield*/, (0, Otp_1.getOtpModel)(replyToken)];
            case 1:
                otpmodel = _b.sent();
                if (!otpmodel) return [3 /*break*/, 14];
                // check retry count
                if (otpmodel.retryCount >= 2) {
                    return [2 /*return*/, (0, helper_1.invalidResponse)(request, response, errorCodes_1.ErrorCodes.OTP_RETRY_COUNT_REACHED.CODE)];
                }
                if (!(otpmodel.emailOrMobile === 'email')) return [3 /*break*/, 7];
                return [4 /*yield*/, (0, Otp_1.increseOtpRetryCount)(replyToken)];
            case 2:
                newOtp = _b.sent();
                if (!newOtp) return [3 /*break*/, 6];
                if (!(otpmodel.purpose === 'EXISTING_ACCOUNT_VIA_EMAIL')) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, login_1.default)(otpmodel.userdata, newOtp.otp)];
            case 3:
                _b.sent();
                return [3 /*break*/, 6];
            case 4: return [4 /*yield*/, (0, registration_1.default)(otpmodel.userdata, newOtp.otp)];
            case 5:
                _b.sent();
                _b.label = 6;
            case 6: return [2 /*return*/, (0, helper_1.successResponse)(request, response, errorCodes_1.ApplicationCodes.OK, replyToken)];
            case 7:
                if (!(otpmodel.emailOrMobile === 'mobile')) return [3 /*break*/, 13];
                return [4 /*yield*/, (0, Otp_1.increseOtpRetryCount)(replyToken)];
            case 8:
                newOtp = _b.sent();
                if (!newOtp) return [3 /*break*/, 12];
                if (!(otpmodel.purpose === 'EXISTING_ACCOUNT_VIA_MOBILE')) return [3 /*break*/, 10];
                return [4 /*yield*/, (0, sms_2.sendOtp)(parseInt(otpmodel.userdata), sms_1.LOGIN_USER_SMS_TEMPLATE.replace('$$$$', newOtp === null || newOtp === void 0 ? void 0 : newOtp.otp.toString()))];
            case 9:
                _b.sent();
                return [3 /*break*/, 12];
            case 10: return [4 /*yield*/, (0, sms_2.sendOtp)(parseInt(otpmodel.userdata), sms_1.REGISTER_USER_SMS_TEMPLATE.replace('$$$$', newOtp === null || newOtp === void 0 ? void 0 : newOtp.otp.toString()))];
            case 11:
                _b.sent();
                _b.label = 12;
            case 12: return [2 /*return*/, (0, helper_1.successResponse)(request, response, errorCodes_1.ApplicationCodes.OK, replyToken)];
            case 13: return [3 /*break*/, 15];
            case 14:
                logger_1.default.error('USERMS::ERROR_IN_RETRY_OTP_API', { journeyId: journeyId });
                return [2 /*return*/, (0, helper_1.errorResponse)(request, response, errorCodes_1.ErrorCodes.TECHNICAL_ERROR.CODE)];
            case 15: return [2 /*return*/];
        }
    });
}); };
var getStateAndCityBasedOnPincode = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1.default.get("https://api.postalpincode.in/pincode/".concat(request.body.pincode))];
            case 1:
                data = (_a.sent()).data;
                if (data) {
                    return [2 /*return*/, (0, helper_1.successResponse)(request, response, errorCodes_1.ApplicationCodes.OK, {
                            state: data[0].PostOffice[0].State,
                            city: data[0].PostOffice[0].District,
                        })];
                }
                else {
                    return [2 /*return*/, (0, helper_1.errorResponse)(request, response, errorCodes_1.ErrorCodes.TECHNICAL_ERROR.CODE)];
                }
                return [2 /*return*/];
        }
    });
}); };
exports.authController = {
    Login: Login,
    VerifyOTP: VerifyOTP,
    RetryOTP: RetryOTP,
    getStateAndCityBasedOnPincode: getStateAndCityBasedOnPincode,
};
