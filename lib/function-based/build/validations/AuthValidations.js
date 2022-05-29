"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetryOtpValidationSchema = exports.VerifyOtpValidationSchema = exports.LoginValidationSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.LoginValidationSchema = joi_1.default.object({
    userdata: joi_1.default.string().required(),
    journeyId: joi_1.default.string().required(),
    lang: joi_1.default.string().optional(),
});
exports.VerifyOtpValidationSchema = joi_1.default.object({
    replyToken: joi_1.default.string().required(),
    otp: joi_1.default.string().required(),
    journeyId: joi_1.default.string().required(),
    lang: joi_1.default.string().optional(),
});
exports.RetryOtpValidationSchema = joi_1.default.object({
    replyToken: joi_1.default.string().required(),
    journeyId: joi_1.default.string().required(),
    lang: joi_1.default.string().optional(),
});
