"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleJob = void 0;
var logger_1 = __importDefault(require("../utils/logger"));
var ExampleJob = function () {
    logger_1.default.debug('cron running');
};
exports.ExampleJob = ExampleJob;
