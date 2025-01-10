import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { PortfolioController } from "./Portfolios.controller";
import { PortfolioValidations } from "./Portfolios.validations";

const router = Router();

router.get(
  "/",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  PortfolioController.getPortofolios
);

router.get(
  "/:id",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  PortfolioController.getPortofolioById
);

router.post(
  "/add-portfolio",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  // validateRequest(PortfolioValidations.createPortfolioValidationSchema),
  PortfolioController.createPortofolio
);

router.patch(
  "/update-portfolio/:id",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  // validateRequest(PortfolioValidations.updatePortfolioValidationSchema),
  PortfolioController.updatePortofolio
);

router.delete(
  "/delete-portfolio",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
  PortfolioController.deletePortofolio
);

export const PortfolioRoutes = router;
