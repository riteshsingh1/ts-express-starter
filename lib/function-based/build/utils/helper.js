"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateInvoiceNumber = exports.maskAadhaarNumber = exports.maskPanNumber = exports.ParseFloat = exports.isValidEmail = exports.isNumeric = exports.errorResponse = exports.invalidResponse = exports.successResponse = exports.HttpStatusCodes = void 0;
var app_1 = require("../config/app");
var lang_1 = require("../lang");
var ApiActivity_1 = require("../models/ApiActivity");
exports.HttpStatusCodes = {
    OK: 200,
    UNAUTHORIZED: 403,
    SERVER_ERROR: 500,
    SERVER_DOWN: 503,
    BAD_REQUEST: 400,
};
/**
 * Send Success Response
 * @param request Request
 * @param response Response
 * @returns JSON
 */
var successResponse = function (request, response, code, data, status, message) {
    var responseObject = {
        code: 'OK',
        message: lang_1.TranslateCode[request.body.lang || 'en'][code],
        data: data,
        isError: false,
    };
    if (message) {
        responseObject = {
            code: 'OK',
            message: message,
            data: data,
            isError: false,
        };
    }
    try {
        if (app_1.SKIP_ACTIVITY) {
            return response.status(200).json(responseObject);
        }
        else {
            ApiActivity_1.ApiActivity.create({
                userId: request.body.userId,
                apiName: request.body.apiName,
                apiEndPoint: request.originalUrl,
                baseUrl: request.path,
                headers: request.headers,
                request: request.body,
                response: responseObject,
                journeyId: request.body.journeyId,
                remarks: request.headers.remarks || 'Concluded',
                code: code,
                createdAt: Date.now(),
            });
            request.headers.remarks = '';
            return response.status(status || exports.HttpStatusCodes.OK).json(responseObject);
        }
    }
    catch (err) {
        return response.status(status || exports.HttpStatusCodes.SERVER_DOWN).json({});
    }
};
exports.successResponse = successResponse;
/**
 * Send Invalid Response
 * @param request Request
 * @param response Response
 * @returns JSON
 */
var invalidResponse = function (request, response, code, data) {
    var responseObject = {
        code: code,
        message: lang_1.TranslateCode[request.body.lang || 'en'][code],
        data: data,
        isError: true,
    };
    try {
        if (app_1.SKIP_ACTIVITY) {
            return response.status(exports.HttpStatusCodes.BAD_REQUEST).json(responseObject);
        }
        else {
            ApiActivity_1.ApiActivity.create({
                userId: request.body.userId,
                apiName: request.body.apiName,
                apiEndPoint: request.originalUrl,
                baseUrl: request.path,
                headers: request.headers,
                request: request.body,
                response: responseObject,
                journeyId: request.body.journeyId,
                remarks: request.headers.remarks || 'Concluded',
                code: code,
                createdAt: Date.now(),
            });
            request.headers.remarks = '';
            return response.status(exports.HttpStatusCodes.BAD_REQUEST).json(responseObject);
        }
    }
    catch (err) {
        return response.status(exports.HttpStatusCodes.SERVER_DOWN).json({});
    }
};
exports.invalidResponse = invalidResponse;
/**
 * Send Error Response
 * @param request Request
 * @param response Response
 * @returns JSON
 */
var errorResponse = function (request, response, code, data, status) {
    var responseObject = {
        code: code,
        message: lang_1.TranslateCode[request.body.lang || 'en'][code],
        data: data,
        isError: true,
    };
    try {
        if (app_1.SKIP_ACTIVITY) {
            return response.status(status || exports.HttpStatusCodes.SERVER_ERROR).json(responseObject);
        }
        else {
            ApiActivity_1.ApiActivity.create({
                userId: request.body.userId,
                apiName: request.body.apiName,
                apiEndPoint: request.originalUrl,
                baseUrl: request.path,
                headers: request.headers,
                request: request.body,
                response: responseObject,
                journeyId: request.body.journeyId,
                remarks: request.headers.remarks || 'Concluded',
                code: code,
                createdAt: Date.now(),
            });
            request.headers.remarks = '';
            return response.status(status || exports.HttpStatusCodes.SERVER_ERROR).json(responseObject);
        }
    }
    catch (err) {
        return response.status(exports.HttpStatusCodes.SERVER_DOWN).json({});
    }
};
exports.errorResponse = errorResponse;
/**
 * Check if a string is numeric or not
 * @param value string | number
 * @returns boolean
 */
var isNumeric = function (value) {
    return /^-?\d+$/.test(value.toString());
};
exports.isNumeric = isNumeric;
/**
 * Check if a email is valid or not
 * @param email string
 * @returns boolean
 */
var isValidEmail = function (email) {
    /* eslint-disable no-useless-escape */
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
exports.isValidEmail = isValidEmail;
var ParseFloat = function (str, val) {
    str = str.toString();
    str = str.slice(0, str.indexOf('.') + val + 1);
    return Number(str);
};
exports.ParseFloat = ParseFloat;
/**
 * Mask PAN Number
 * @param panNumber string
 * @returns string
 */
var maskPanNumber = function (panNumber) {
    if (panNumber.trim().length !== 10) {
        return '';
    }
    var startingPan = panNumber.substring(0, 3);
    var endingPan = panNumber.substring(10, 10);
    return "".concat(startingPan, "XXXXXX").concat(endingPan);
};
exports.maskPanNumber = maskPanNumber;
/**
 * Mask PAN Number
 * @param aadhaarNumber string
 * @returns string
 */
var maskAadhaarNumber = function (aadhaarNumber) {
    if (aadhaarNumber.trim().length !== 12) {
        return '';
    }
    var startingPan = aadhaarNumber.substring(0, 4);
    var endingPan = aadhaarNumber.substring(10, 12);
    return "".concat(startingPan, "XXXXXX").concat(endingPan);
};
exports.maskAadhaarNumber = maskAadhaarNumber;
/**
 * @method generateInvoiceNumber
 * @returns Invoice number
 */
var generateInvoiceNumber = function () {
    var date = new Date();
    var firstTwoDigits = date.getFullYear() - 2000;
    var nextTwoDigits = date.getDate();
    var currentMonth = ('0' + date.getMonth().toString()).slice(-2);
    var uniqueInvoiceNumber = Math.floor(Math.random() * 100000);
    return "BDG".concat(firstTwoDigits).concat(nextTwoDigits).concat(currentMonth, "20").concat(uniqueInvoiceNumber);
};
exports.generateInvoiceNumber = generateInvoiceNumber;
