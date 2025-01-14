"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioRoutes = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const Portfolios_controller_1 = require("./Portfolios.controller");
const router = (0, express_1.Router)();
router.get("/", (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), Portfolios_controller_1.PortfolioController.getPortofolios);
router.get("/:id", (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), Portfolios_controller_1.PortfolioController.getPortofolioById);
router.post("/add-portfolio", (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), 
// validateRequest(PortfolioValidations.createPortfolioValidationSchema),
Portfolios_controller_1.PortfolioController.createPortofolio);
router.patch("/update-portfolio/:id", (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), 
// validateRequest(PortfolioValidations.updatePortfolioValidationSchema),
Portfolios_controller_1.PortfolioController.updatePortofolio);
router.delete("/delete-portfolio", (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), Portfolios_controller_1.PortfolioController.deletePortofolio);
exports.PortfolioRoutes = router;
