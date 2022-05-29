"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiActivity = void 0;
var mongoose_1 = require("mongoose");
var apiActivitySchema = new mongoose_1.Schema({
    journeyId: { type: String, required: true },
    userId: { type: String, required: true, default: 'GUEST' },
    code: { type: String, required: false },
    apiEndPoint: { type: String, required: true },
    baseUrl: { type: String, required: true },
    remarks: { type: String, required: true },
    request: { type: Object, required: true },
    response: { type: Object, required: false },
    headers: { type: Object, required: true },
    createdAt: { type: Number, required: false },
});
var d = new Date();
var collectionName = "apiActivity-".concat(d.getMonth() + 1).concat(d.getFullYear());
exports.ApiActivity = (0, mongoose_1.model)(collectionName, apiActivitySchema);
