"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var app_1 = require("../config/app");
var errorCodes_1 = require("../config/errorCodes");
var helper_1 = require("./helper");
var authMiddleware = function (request, response, next) {
    // const token
    try {
        var authHeader = request.headers.authorization;
        var token = authHeader && authHeader.split(' ')[1];
        if (token == null) {
            return (0, helper_1.errorResponse)(request, response, errorCodes_1.ErrorCodes.UNAUTHORIZED_USER.CODE, '', helper_1.HttpStatusCodes.UNAUTHORIZED);
        }
        (0, jsonwebtoken_1.verify)(token, app_1.APP_SECRET, function (err, user) {
            if (err) {
                if (err.name === 'TokenExpiredError') {
                    return (0, helper_1.errorResponse)(request, response, errorCodes_1.ErrorCodes.TOKEN_EXPIRED_ERROR.CODE, '', helper_1.HttpStatusCodes.UNAUTHORIZED);
                }
                if (err.name === 'NotBeforeError') {
                    return (0, helper_1.errorResponse)(request, response, errorCodes_1.ErrorCodes.INVALID_DATA.CODE, '', helper_1.HttpStatusCodes.UNAUTHORIZED);
                }
                return (0, helper_1.errorResponse)(request, response, errorCodes_1.ErrorCodes.UNAUTHORIZED_USER.CODE, '', helper_1.HttpStatusCodes.UNAUTHORIZED);
            }
            request.user = user.uxid;
            next();
        });
    }
    catch (e) {
        return (0, helper_1.errorResponse)(request, response, errorCodes_1.ErrorCodes.TECHNICAL_ERROR.CODE, '', helper_1.HttpStatusCodes.SERVER_ERROR);
    }
};
exports.authMiddleware = authMiddleware;
