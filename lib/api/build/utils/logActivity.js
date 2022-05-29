"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogActivity = void 0;
var joi_1 = __importDefault(require("joi"));
var app_1 = require("../config/app");
var ApiActivity_1 = require("../models/ApiActivity");
var LogActivity = function (request, response, next) {
    if (app_1.SKIP_ACTIVITY || request.method.toLowerCase() === 'get') {
        next();
    }
    else {
        try {
            var error = joi_1.default.object({
                journeyId: joi_1.default.string().required(),
                lang: joi_1.default.string().required(),
            })
                .unknown()
                .validate(request.body).error;
            if (error) {
                var responseObject = {
                    code: 400,
                    message: 'Invalid Requst',
                    data: error.details,
                };
                return response.status(400).json(responseObject);
            }
            var remarks = Date.now() + '-' + Math.floor(Math.random() * 100000);
            ApiActivity_1.ApiActivity.create({
                userId: request.user || 'GUEST',
                apiName: request.body.apiName,
                apiEndPoint: request.originalUrl,
                baseUrl: request.path,
                headers: request.headers,
                request: request.body,
                response: {},
                journeyId: request.body.journeyId,
                remarks: remarks,
                code: '',
                createdAt: Date.now(),
            });
            request.headers.remarks = remarks;
            next();
        }
        catch (err) {
            var responseObject = {
                code: 'FATAL_ERROR',
                message: 'Something went wrong',
                data: {},
            };
            return response.status(503).json(responseObject);
        }
    }
};
exports.LogActivity = LogActivity;
