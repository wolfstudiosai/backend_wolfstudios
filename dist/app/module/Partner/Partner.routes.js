"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnerRoutes = void 0;
const client_1 = require("@prisma/client");
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const Partner_controllers_1 = require("./Partner.controllers");
const Partner_validations_1 = require("./Partner.validations");
const router = (0, express_1.Router)();
router.get("/", Partner_controllers_1.PartnerControllers.getPartners);
router.post("/add", (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN, client_1.UserRole.USER), (0, validateRequest_1.default)(Partner_validations_1.PartnerValidations.addPartnerValidationSchema), Partner_controllers_1.PartnerControllers.addPartner);
router.patch("/update/:id", (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN, client_1.UserRole.USER), (0, validateRequest_1.default)(Partner_validations_1.PartnerValidations.updatePartnerValidationSchema), Partner_controllers_1.PartnerControllers.updatePartner);
router.delete("/delete", (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN, client_1.UserRole.USER), (0, validateRequest_1.default)(Partner_validations_1.PartnerValidations.deletePartnerValidationSchema), Partner_controllers_1.PartnerControllers.deletePartners);
exports.PartnerRoutes = router;
