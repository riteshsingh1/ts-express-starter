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
exports.getOtpModelBasedOnUserData = exports.deleteOtpModel = exports.getOtpModel = exports.VerifyOtpFromDatabase = exports.increseOtpRetryCount = exports.updateOtpPurpose = exports.saveOtpModel = exports.Otp = void 0;
var mongoose_1 = require("mongoose");
var uuid_1 = require("uuid");
var OtpSchema = new mongoose_1.Schema({
    userdata: { type: String, required: true },
    emailOrMobile: { type: String, required: true },
    otp: { type: String, required: true },
    purpose: { type: String, required: true },
    retryCount: { type: Number, required: true },
    replyToken: { type: String, required: true },
    createdAt: { type: Number, required: true },
    expireAt: { type: Number, required: true },
});
exports.Otp = (0, mongoose_1.model)('Otp', OtpSchema);
/**
 * Save Otp Model
 * @param userdata string
 * @param emailOrMobile string
 * @param purpose string
 * @returns IOtp
 */
var saveOtpModel = function (userdata, emailOrMobile, purpose) { return __awaiter(void 0, void 0, void 0, function () {
    var generatedOtp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                generatedOtp = Math.floor(100000 + Math.random() * 900000);
                return [4 /*yield*/, exports.Otp.create({
                        otp: generatedOtp,
                        userdata: userdata,
                        emailOrMobile: emailOrMobile,
                        purpose: purpose,
                        retryCount: 0,
                        replyToken: (0, uuid_1.v4)(),
                        createdAt: Date.now(),
                        expireAt: Date.now() + 300000,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.saveOtpModel = saveOtpModel;
/**
 * Update Otp Purpose
 * @param purpose string
 * @param _id string | ObjectId
 * @returns Otp
 */
var updateOtpPurpose = function (purpose, _id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.Otp.findByIdAndUpdate(_id, { purpose: purpose })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.updateOtpPurpose = updateOtpPurpose;
/**
 * Increse Otp Count
 * @param replyToken string
 * @returns Otp | void
 */
var increseOtpRetryCount = function (replyToken) { return __awaiter(void 0, void 0, void 0, function () {
    var otpmodel, generatedOtp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.Otp.findOne({ replyToken: replyToken })];
            case 1:
                otpmodel = _a.sent();
                generatedOtp = Math.floor(100000 + Math.random() * 900000);
                if (!otpmodel) return [3 /*break*/, 3];
                return [4 /*yield*/, exports.Otp.findOneAndUpdate({ replyToken: replyToken }, {
                        otp: generatedOtp,
                        retryCount: (otpmodel === null || otpmodel === void 0 ? void 0 : otpmodel.retryCount) + 1,
                        createdAt: Date.now(),
                        expireAt: Date.now() + 300000,
                    }, {
                        new: true,
                    })];
            case 2: return [2 /*return*/, _a.sent()];
            case 3: return [2 /*return*/, otpmodel];
        }
    });
}); };
exports.increseOtpRetryCount = increseOtpRetryCount;
/**
 * Verify OTP from database based on replyToken and otp
 * @param replyToken string
 * @param otp string
 * @returns Otp
 */
var VerifyOtpFromDatabase = function (replyToken, otp) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.Otp.findOne({ replyToken: replyToken, otp: otp })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.VerifyOtpFromDatabase = VerifyOtpFromDatabase;
/**
 * Get Otp model based on replyToken
 * @param replyToken string
 * @returns OtpModel
 */
var getOtpModel = function (replyToken) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.Otp.findOne({ replyToken: replyToken })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getOtpModel = getOtpModel;
/**
 * Delete OTP From Database
 * @param _id string | Schema.Types.ObjectId
 * @returns OtpModel
 */
var deleteOtpModel = function (_id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.Otp.findByIdAndDelete(_id)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.deleteOtpModel = deleteOtpModel;
/**
 * Get Otp Model based on user data
 * @param userdata string | number
 * @returns OtpModel
 */
var getOtpModelBasedOnUserData = function (userdata) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.Otp.findOne({ userdata: userdata })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getOtpModelBasedOnUserData = getOtpModelBasedOnUserData;
