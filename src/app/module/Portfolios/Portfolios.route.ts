import { UserRole } from "@prisma/client";
import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { PortfolioControllers } from "./Portfolios.controller";
import { PortfolioValidations } from "./Portfolios.validations";

const router = Router();

router.get(
  "/",
  PortfolioControllers.getPortfolios
);

router.post(
  "/add-portfolio",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  validateRequest(PortfolioValidations.createPortfolioValidationSchema),
  PortfolioControllers.createPortfolio
);

router.patch(
  "/update-portfolio/:id",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  validateRequest(PortfolioValidations.updatePortfolioValidationSchema),
  PortfolioControllers.updatePortfolio
);

router.delete(
  "/delete-portfolio",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  validateRequest(PortfolioValidations.deletePortfolioValidationSchema),
  PortfolioControllers.deletePortfolios
);

export const PortfolioRoutes = router;
