"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston = __importStar(require("winston"));
var winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
var path = __importStar(require("path"));
var transports_1 = require("winston/lib/winston/transports");
var bsaeSir = path.join(__dirname, '../../logs/');
var winston_loggly_bulk_1 = require("winston-loggly-bulk");
var app_1 = require("../config/app");
var transport = new winston_daily_rotate_file_1.default({
    filename: bsaeSir + 'application-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
});
var logger = winston.createLogger({
    transports: [
        transport,
        new transports_1.Console(),
        new winston_loggly_bulk_1.Loggly({
            token: '50dccb28-a5ce-44f5-9f42-84d8a20e95d9',
            subdomain: 'brightdigigold',
            tags: ['MICRO_USER'],
            json: true,
        }),
    ],
    format: winston.format.combine(winston.format.json()),
});
if (app_1.NODE_ENV === 'production') {
    logger = winston.createLogger({
        transports: [
            transport,
            new transports_1.Console({
                format: winston.format.json(),
            }),
            new winston_loggly_bulk_1.Loggly({
                token: '50dccb28-a5ce-44f5-9f42-84d8a20e95d9',
                subdomain: 'brightdigigold',
                tags: ['MICRO_USER'],
                json: true,
            }),
        ],
        format: winston.format.combine(winston.format.json()),
    });
}
logger.exitOnError = false;
exports.default = logger;
