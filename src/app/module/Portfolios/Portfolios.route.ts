import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { PortfolioController } from "./Portfolios.controller";
import { PortfolioValidations } from "./Portfolios.validations";

const router = Router();

router.get(
  "/portfolios",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  PortfolioController.getPortofolios
);

router.get(
  "/portfolios/:id",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  PortfolioController.getPortofolios
);

router.post(
  "/add-portfolios",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  validateRequest(PortfolioValidations.createPortfolioValidationSchema),
  PortfolioController.createPortofolio
);

router.patch(
  "/update-portfolios/:id",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  validateRequest(PortfolioValidations.updatePortfolioValidationSchema),
  PortfolioController.updatePortofolio
);

router.delete(
  "/delete-portfolios/:id",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  PortfolioController.updatePortofolio
);

export const PortfolioRoutes = router;
