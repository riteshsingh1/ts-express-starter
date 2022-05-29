"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
var cron_1 = require("cron");
var exampleJob_1 = require("../jobs/exampleJob");
exports.Job = new cron_1.CronJob('0 */10 * * * *', function () {
    exampleJob_1.ExampleJob;
});
