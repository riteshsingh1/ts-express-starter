"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuthMiddleware = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var app_1 = require("../config/app");
var errorCodes_1 = require("../config/errorCodes");
var helper_1 = require("./helper");
var checkAuthMiddleware = function (request, response, next) {
    // const token
    try {
        var authHeader = request.headers.authorization;
        var token = authHeader && authHeader.split(' ')[1];
        if (token == null) {
            request.user = null;
            next();
            return;
        }
        (0, jsonwebtoken_1.verify)(token, app_1.APP_SECRET, function (err, user) {
            if (err) {
                request.user = null;
                next();
                return;
            }
            request.user = user.uxid;
            next();
        });
    }
    catch (e) {
        return (0, helper_1.errorResponse)(request, response, errorCodes_1.ErrorCodes.TECHNICAL_ERROR.CODE, '', helper_1.HttpStatusCodes.SERVER_ERROR);
    }
};
exports.checkAuthMiddleware = checkAuthMiddleware;
