"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioRoutes = void 0;
const client_1 = require("@prisma/client");
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const Portfolios_controller_1 = require("./Portfolios.controller");
const Portfolios_validations_1 = require("./Portfolios.validations");
const router = (0, express_1.Router)();
router.get("/", Portfolios_controller_1.PortfolioControllers.getPortfolios);
router.post("/add-portfolio", (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), (0, validateRequest_1.default)(Portfolios_validations_1.PortfolioValidations.createPortfolioValidationSchema), Portfolios_controller_1.PortfolioControllers.createPortfolio);
router.patch("/update/:id", (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), (0, validateRequest_1.default)(Portfolios_validations_1.PortfolioValidations.updatePortfolioValidationSchema), Portfolios_controller_1.PortfolioControllers.updatePortfolio);
router.delete("/delete", (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), (0, validateRequest_1.default)(Portfolios_validations_1.PortfolioValidations.deletePortfolioValidationSchema), Portfolios_controller_1.PortfolioControllers.deletePortfolios);
exports.PortfolioRoutes = router;
