import { UserRole } from "@prisma/client";
import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { PartnerControllers } from "./Partner.controllers";
import { PartnerValidations } from "./Partner.validations";

const router = Router();

router.get("/", PartnerControllers.getPartners);

router.post(
    "/add",
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
    validateRequest(PartnerValidations.addPartnerValidationSchema),
    PartnerControllers.addPartner
);

router.patch(
    "/update/:id",
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
    validateRequest(PartnerValidations.updatePartnerValidationSchema),
    PartnerControllers.updatePartner
);

router.delete(
    "/delete",
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
    validateRequest(PartnerValidations.deletePartnerValidationSchema),
    PartnerControllers.deletePartners
);

export const PartnerRoutes = router;

