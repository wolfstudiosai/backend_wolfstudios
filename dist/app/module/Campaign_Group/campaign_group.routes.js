"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignGroupRoutes = void 0;
const client_1 = require("@prisma/client");
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const campaign_group_controllers_1 = require("./campaign_group.controllers");
const campaign_group_validations_1 = require("./campaign_group.validations");
const router = (0, express_1.Router)();
router.get("/", campaign_group_controllers_1.CampaignGroupControllers.getCampaignGroups);
router.post("/add", (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN, client_1.UserRole.USER), (0, validateRequest_1.default)(campaign_group_validations_1.CampaignGroupValidations.createCampaignGroupValidationSchema), campaign_group_controllers_1.CampaignGroupControllers.createCampaignGroup);
router.patch("/update/:id", (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN, client_1.UserRole.USER), (0, validateRequest_1.default)(campaign_group_validations_1.CampaignGroupValidations.updateCampaignGroupValidationSchema), campaign_group_controllers_1.CampaignGroupControllers.updateCampaignGroup);
router.delete("/delete", (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN, client_1.UserRole.USER), (0, validateRequest_1.default)(campaign_group_validations_1.CampaignGroupValidations.deleteCampaignGroupValidationSchema), campaign_group_controllers_1.CampaignGroupControllers.deleteCampaignGroups);
exports.CampaignGroupRoutes = router;
