import { UserRole } from "@prisma/client";
import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { CampaignControllers } from "./Campaign.controllers";
import { CampaignValidations } from "./Campaign.validations";

const router = Router();

router.get("/", CampaignControllers.getCampaigns);

router.post(
  "/add-campaign",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  validateRequest(CampaignValidations.createCampaignValidationSchema),
  CampaignControllers.createCampaign
);

router.patch(
  "/update/:id",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  validateRequest(CampaignValidations.updateCampaignValidationSchema),
  CampaignControllers.updateCampaign
);

router.delete(
  "/delete",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  validateRequest(CampaignValidations.deleteCampaignValidationSchema),
  CampaignControllers.deleteCampaigns
);

export const CampaignRoutes = router;
