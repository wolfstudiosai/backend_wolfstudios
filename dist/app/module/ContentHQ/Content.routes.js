"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRoutes = void 0;
const client_1 = require("@prisma/client");
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const Content_controllers_1 = require("./Content.controllers");
const Content_validations_1 = require("./Content.validations");
const router = (0, express_1.Router)();
router.get("/", (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), Content_controllers_1.ContentControllers.getContents);
router.post("/add-record", (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), (0, validateRequest_1.default)(Content_validations_1.ContentValidations.createContentValidationSchema), Content_controllers_1.ContentControllers.createContent);
router.patch("/update-record/:id", (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), (0, validateRequest_1.default)(Content_validations_1.ContentValidations.updateContentValidationSchema), Content_controllers_1.ContentControllers.updateContent);
router.delete("/delete-records", (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), (0, validateRequest_1.default)(Content_validations_1.ContentValidations.deleteContentValidationSchema), Content_controllers_1.ContentControllers.deleteContents);
exports.ContentRoutes = router;
