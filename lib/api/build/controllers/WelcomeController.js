"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcomeController = void 0;
var WelcomeToExpressApplication = function (request, response) {
    return response.json({
        title: 'Welcome To Express Application',
        version: 1.0,
    });
};
exports.welcomeController = {
    WelcomeToExpressApplication: WelcomeToExpressApplication,
};
