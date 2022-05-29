"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailgunClient = exports.FROM_NAME_VERIFY = exports.FROM_EMAIL_VERIFY = exports.MAILGUN_DOMAIN = exports.MAILGUN_KEY = exports.EMAIL_PASSWORD = exports.EMAIL_USERNAME = exports.EMAIL_METHOD = exports.EMAIL_HOST = void 0;
var form_data_1 = __importDefault(require("form-data"));
var mailgun_js_1 = __importDefault(require("mailgun.js"));
exports.EMAIL_HOST = process.env.EMAIL_HOST;
exports.EMAIL_METHOD = process.env.EMAIL_METHOD;
exports.EMAIL_USERNAME = process.env.EMAIL_USERNAME;
exports.EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
exports.MAILGUN_KEY = process.env.MAILGUN_KEY || 'asdasdas';
exports.MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
exports.FROM_EMAIL_VERIFY = process.env.FROM_EMAIL_VERIFY;
exports.FROM_NAME_VERIFY = process.env.FROM_NAME_VERIFY;
var mailgun = new mailgun_js_1.default(form_data_1.default);
exports.mailgunClient = mailgun.client({ key: exports.MAILGUN_KEY, username: 'api' });
