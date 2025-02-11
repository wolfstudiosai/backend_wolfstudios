import { UserRole } from "@prisma/client";
import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { CampaignGroupControllers } from "./campaign_group.controllers";
import { CampaignGroupValidations } from "./campaign_group.validations";

const router = Router();

router.get("/", CampaignGroupControllers.getCampaignGroups);

router.post(
    "/add",
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
    validateRequest(CampaignGroupValidations.createCampaignGroupValidationSchema),
    CampaignGroupControllers.createCampaignGroup
);

router.patch(
    "/update/:id",
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
    validateRequest(CampaignGroupValidations.updateCampaignGroupValidationSchema),
    CampaignGroupControllers.updateCampaignGroup
);

router.delete(
    "/delete",
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
    validateRequest(CampaignGroupValidations.deleteCampaignGroupValidationSchema),
    CampaignGroupControllers.deleteCampaignGroups
);

export const CampaignGroupRoutes = router;
