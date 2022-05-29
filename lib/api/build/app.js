"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = require("mongoose");
require("dotenv/config");
var routes_1 = __importDefault(require("./routes"));
var database_1 = require("./config/database");
var app_1 = require("./config/app");
var logger_1 = __importDefault(require("./utils/logger"));
var cron_1 = require("./config/cron");
var application = (0, express_1.default)();
application.use(express_1.default.json());
var corsConfig = {
    origin: '*',
    methods: '*',
};
application.use((0, cors_1.default)(corsConfig));
// application.all('*', LogActivity);
application.use('/', routes_1.default);
if (database_1.dbConfig.mongooseUrl) {
    (0, mongoose_1.connect)(database_1.dbConfig.mongooseUrl, function () {
        logger_1.default.info("database connected");
    });
}
else {
    logger_1.default.error('dbconfig Url not defined');
}
cron_1.Job.start();
application.listen(app_1.PORT, function () {
    logger_1.default.info("server running on ".concat(app_1.PORT));
});
