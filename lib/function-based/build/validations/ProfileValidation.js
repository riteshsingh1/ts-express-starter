"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserPhotoValidationSchema = exports.validateUserAddressDetailsValidationSchema = exports.validateUserBankDetailsValidationSchema = exports.validateUserEmailOrMobileValidationSchema = exports.CheckPanValidationSchema = exports.UpdateUserPersonalDetailValidationSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.UpdateUserPersonalDetailValidationSchema = joi_1.default.object({
    journeyId: joi_1.default.string().required(),
    name: joi_1.default.string().required(),
    userdata: joi_1.default.required().required(),
    dob: joi_1.default.any().optional(),
    panNumber: joi_1.default.any().optional(),
    lang: joi_1.default.string().optional(),
});
exports.CheckPanValidationSchema = joi_1.default.object({
    journeyId: joi_1.default.string().required(),
    name: joi_1.default.string().required(),
    panNumber: joi_1.default.string().optional(),
    lang: joi_1.default.string().optional(),
});
exports.validateUserEmailOrMobileValidationSchema = joi_1.default.object({
    journeyId: joi_1.default.string().required(),
    userdata: joi_1.default.string().required(),
    lang: joi_1.default.string().optional(),
});
exports.validateUserBankDetailsValidationSchema = joi_1.default.object({
    journeyId: joi_1.default.string().required(),
    bankName: joi_1.default.string().required(),
    accountName: joi_1.default.string().required(),
    ifsc: joi_1.default.string().required(),
    accountNumber: joi_1.default.string().required(),
    lang: joi_1.default.string().optional(),
});
exports.validateUserAddressDetailsValidationSchema = joi_1.default.object({
    journeyId: joi_1.default.string().required(),
    line1: joi_1.default.string().required(),
    line2: joi_1.default.optional(),
    pincode: joi_1.default.number().required(),
    state: joi_1.default.string().required(),
    city: joi_1.default.string().required(),
    lang: joi_1.default.string().optional(),
});
exports.validateUserPhotoValidationSchema = joi_1.default.object({
    journeyId: joi_1.default.string().required(),
    photo: joi_1.default.string().required(),
    lang: joi_1.default.string().optional(),
});
