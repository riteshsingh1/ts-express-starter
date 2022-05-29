"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPurchaseAndSaleOrderSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.createPurchaseAndSaleOrderSchema = joi_1.default.object({
    journeyId: joi_1.default.string().required(),
    orderType: joi_1.default.string().required().allow('BUY', 'SELL'),
    item: joi_1.default.string().required().allow('GOLD', 'SILVER'),
    unit: joi_1.default.string().required().allow('GRAMS', 'QUANTITY', 'AMOUNT'),
    amount: joi_1.default.number().required(),
    amountWithoutTax: joi_1.default.number().required(),
    tax: joi_1.default.number().required(),
    totalAmount: joi_1.default.number().required(),
    lang: joi_1.default.string().optional(),
});
