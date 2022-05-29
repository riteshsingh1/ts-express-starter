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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserMobile = exports.updateUserEmail = exports.checkIfMobileOrEmailAlreadyExistsModel = exports.updateUserAddress = exports.updateUserBankDetails = exports.updateUserPhoto = exports.updateUserProfile = exports.getUserInformation = exports.RegisterUser = exports.User = void 0;
var mongoose_1 = require("mongoose");
var helper_1 = require("../utils/helper");
var userSchema = new mongoose_1.Schema({
    name: { type: String, default: 'user' },
    email: { type: String, default: '' },
    mobile: { type: String, default: '' },
    photo: { type: String, default: '' },
    userId: { type: String, required: true },
    dob: { type: String, required: true },
    isAddressCompleted: { type: Boolean, default: false },
    isBasicDetailsCompleted: { type: Boolean, default: false },
    isKycDone: { type: Boolean, default: false },
    isPanUploaded: { type: Boolean, default: false },
    isEmailVerified: { type: Boolean, default: false },
    isMobileVerified: { type: Boolean, default: false },
    isBankDetailsCompleted: { type: Boolean, default: false },
    address: {
        line1: { type: String, required: true, default: '' },
        line2: { type: String, required: true, default: '' },
        pincode: { type: Number, required: true, default: null },
        state: { type: String, required: true, default: '' },
        city: { type: String, required: true, default: '' },
    },
    kyc: {
        panNumber: { type: String, required: true, default: '' },
        aadhaarNumber: { type: String, required: false, default: '' },
    },
    bankDetails: {
        bankName: { type: String, required: true, default: '' },
        accountName: { type: String, required: true, default: '' },
        ifsc: { type: String, required: true, default: '' },
        accountNumber: { type: String, required: true, default: '' },
    },
    createdAt: { type: Number, default: Date.now() },
    updatedAt: { type: Number, default: Date.now() },
});
exports.User = (0, mongoose_1.model)('User', userSchema);
/**
 * Register User
 * @param key string
 * @param value string
 * @param emailVerified boolean
 * @param mobileVerified boolean
 * @returns User
 */
var RegisterUser = function (key, value, emailVerified, mobileVerified) { return __awaiter(void 0, void 0, void 0, function () {
    var userId;
    var _a;
    return __generator(this, function (_b) {
        userId = "USER".concat(Math.floor(Math.random() * 1000000000));
        return [2 /*return*/, exports.User.create((_a = {},
                _a[key] = value,
                _a.userId = userId,
                _a.dob = ' ',
                _a.isAddressCompleted = false,
                _a.isKycDone = false,
                _a.isPanUploaded = false,
                _a.isEmailVerified = emailVerified,
                _a.isMobileVerified = mobileVerified,
                _a.isBankDetailsCompleted = false,
                _a.isBasicDetailsCompleted = false,
                _a.address = {
                    line1: ' ',
                    line2: ' ',
                    pincode: ' ',
                    state: ' ',
                    city: ' ',
                },
                _a.kyc = {
                    panNumber: ' ',
                    aadhaarNumber: ' ',
                },
                _a.bankDetails = {
                    bankName: ' ',
                    accountName: ' ',
                    ifsc: ' ',
                    accountNumber: ' ',
                },
                _a))];
    });
}); };
exports.RegisterUser = RegisterUser;
/**
 * Get User Information
 * @param key string | number
 * @param value string | number
 * @returns User
 */
var getUserInformation = function (key, value) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, exports.User.findOne((_a = {}, _a[key] = value, _a))];
            case 1:
                user = _b.sent();
                if (user && user.isKycDone && user.kyc) {
                    user.kyc.panNumber = (0, helper_1.maskPanNumber)(user.kyc.panNumber);
                    user.kyc.aadhaarNumber = (0, helper_1.maskAadhaarNumber)(user.kyc.aadhaarNumber);
                }
                return [2 /*return*/, user];
        }
    });
}); };
exports.getUserInformation = getUserInformation;
var updateUserProfile = function (userId, dob, name, userdata, value, panNumber) { return __awaiter(void 0, void 0, void 0, function () {
    var insertObj;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                insertObj = (_a = {
                        name: name
                    },
                    _a[userdata] = value,
                    _a.isBasicDetailsCompleted = true,
                    _a.dob = dob,
                    _a.$set = {
                        'kyc.panNumber': panNumber,
                    },
                    _a);
                if (panNumber) {
                    insertObj = (_b = {
                            name: name
                        },
                        _b[userdata] = value,
                        _b.isKycDone = true,
                        _b.isBasicDetailsCompleted = true,
                        _b.dob = dob,
                        _b.$set = {
                            'kyc.panNumber': panNumber,
                        },
                        _b);
                }
                return [4 /*yield*/, exports.User.findOneAndUpdate({ userId: userId }, insertObj, {
                        new: true,
                    })];
            case 1: return [2 /*return*/, _c.sent()];
        }
    });
}); };
exports.updateUserProfile = updateUserProfile;
var updateUserPhoto = function (userId, userPhoto) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.User.findOneAndUpdate({ userId: userId }, {
                    photo: userPhoto,
                }, {
                    new: true,
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.updateUserPhoto = updateUserPhoto;
/**
 * Update the bank details
 * @param userId string | number
 * @param bankName string | number
 * @param accountName string
 * @param ifsc string
 * @param accountNumber string
 * @returns User object
 */
var updateUserBankDetails = function (userId, bankName, accountName, ifsc, accountNumber) { return __awaiter(void 0, void 0, void 0, function () {
    var insertObj;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                insertObj = {
                    isBankDetailsCompleted: true,
                    $set: {
                        'bankDetails.bankName': bankName,
                        'bankDetails.accountName': accountName,
                        'bankDetails.accountNumber': accountNumber,
                        'bankDetails.ifsc': ifsc,
                    },
                };
                return [4 /*yield*/, exports.User.findOneAndUpdate({ userId: userId }, insertObj, {
                        new: true,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.updateUserBankDetails = updateUserBankDetails;
/**
 * Update user address information details
 * @param userId string | number
 * @param line1 string | number
 * @param line2 string
 * @param pincode string
 * @param state string
 * @param city string
 * @returns User object
 */
var updateUserAddress = function (userId, line1, line2, pincode, state, city) { return __awaiter(void 0, void 0, void 0, function () {
    var insertObj;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                insertObj = {
                    isAddressCompleted: true,
                    $set: {
                        'address.line1': line1,
                        'address.line2': line2,
                        'address.pincode': pincode,
                        'address.state': state,
                        'address.city': city,
                    },
                };
                return [4 /*yield*/, exports.User.findOneAndUpdate({ userId: userId }, insertObj, {
                        new: true,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.updateUserAddress = updateUserAddress;
/**
 * Get User Information
 * @param key string | number
 * @param value string | number
 * @returns User
 */
var checkIfMobileOrEmailAlreadyExistsModel = function (key, value) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, exports.User.findOne((_a = {}, _a[key] = value, _a))];
            case 1: return [2 /*return*/, _b.sent()];
        }
    });
}); };
exports.checkIfMobileOrEmailAlreadyExistsModel = checkIfMobileOrEmailAlreadyExistsModel;
/**
 * Update User email information
 * @param userId string
 * @param email string
 * @returns User object
 */
var updateUserEmail = function (userId, email) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.User.findOneAndUpdate({ userId: userId }, { email: email })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.updateUserEmail = updateUserEmail;
/**
 * Update User mobile information
 * @param userId string
 * @param mobile string
 * @returns User object
 */
var updateUserMobile = function (userId, mobile) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.User.findOneAndUpdate({ userId: userId }, { mobile: mobile })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.updateUserMobile = updateUserMobile;
