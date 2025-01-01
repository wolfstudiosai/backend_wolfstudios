"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataManagementRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const DataManagement_controllers_1 = require("./DataManagement.controllers");
const DataManagement_validations_1 = require("./DataManagement.validations");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
router.get("/", (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), DataManagement_controllers_1.DataManagementControllers.getDataManagementRecords);
router.post("/add-record", (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), (0, validateRequest_1.default)(DataManagement_validations_1.DataManagementValidations.addDataManagementRecordValidationSchema), DataManagement_controllers_1.DataManagementControllers.createDataManagementRecord);
exports.DataManagementRoutes = router;
