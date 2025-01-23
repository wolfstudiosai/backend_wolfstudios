import { UserRole } from "@prisma/client";
import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { ContentControllers } from "./Content.controllers";
import { ContentValidations } from "./Content.validations";

const router = Router();

router.get(
  "/",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  ContentControllers.getContents
);

router.post(
  "/add-record",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  validateRequest(ContentValidations.createContentValidationSchema),
  ContentControllers.createContent
);

router.patch(
  "/update-record/:id",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  validateRequest(ContentValidations.updateContentValidationSchema),
  ContentControllers.updateContent
);

router.delete(
  "/delete-records",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  validateRequest(ContentValidations.deleteContentValidationSchema),
  ContentControllers.deleteContents
);

export const ContentRoutes = router;
