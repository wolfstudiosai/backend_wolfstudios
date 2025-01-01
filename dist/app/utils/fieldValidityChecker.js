"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = __importDefault(require("../error/ApiError"));
const fieldValidityChecker = (fields, data) => {
    const isValid = fields.includes(data);
    if (!isValid) {
        throw new ApiError_1.default(httpStatus.BAD_REQUEST, `${data} is invalid field. Allowed fields are ${fields
            .map((i) => `'${i}'`)
            .join(", ")}`);
    }
};
exports.default = fieldValidityChecker;
