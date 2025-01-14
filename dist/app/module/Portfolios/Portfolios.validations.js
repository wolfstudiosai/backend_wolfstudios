"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioValidations = void 0;
const Portfolios_enum_1 = require("./Portfolios.enum"); // Assuming this imports the enum
const zod_1 = require("zod");
// Validation schema for creating a portfolio
const createPortfolioValidationSchema = zod_1.z.object({
    type: zod_1.z.nativeEnum(Portfolios_enum_1.EPortfolioType),
    name: zod_1.z.string().min(1, { message: "Name is required" }),
    status: zod_1.z.nativeEnum(Portfolios_enum_1.EPortfolioStatus),
    model: zod_1.z.string().optional(),
    days_location: zod_1.z.string().optional(),
    sessions: zod_1.z.string().optional(),
    producer: zod_1.z.string().optional(),
    production_studio: zod_1.z.string().optional(),
    location: zod_1.z.string().optional(),
    talent: zod_1.z.string().optional(),
    creation_10_images_services_provide: zod_1.z.string().optional(),
    brand: zod_1.z.string().optional(),
    deliverables: zod_1.z.string().optional(),
});
// Validation schema for updating a portfolio
// For updating, most fields can be optional (but the id must still be provided)
const updatePortfolioValidationSchema = zod_1.z.object({
    type: zod_1.z.nativeEnum(Portfolios_enum_1.EPortfolioType).optional(),
    status: zod_1.z.nativeEnum(Portfolios_enum_1.EPortfolioStatus).optional(),
    name: zod_1.z.string().min(1, { message: "Name is required" }).optional(),
    model: zod_1.z.string().optional(),
    days_location: zod_1.z.string().optional(),
    sessions: zod_1.z.string().optional(),
    producer: zod_1.z.string().optional(),
    production_studio: zod_1.z.string().optional(),
    location: zod_1.z.number().optional(),
    talent: zod_1.z.string().optional(),
    creation_10_images_services_provide: zod_1.z.string().optional(),
    brand: zod_1.z.string().optional(),
    deliverables: zod_1.z.string().optional(),
});
// Exporting the validation schemas
exports.PortfolioValidations = {
    createPortfolioValidationSchema,
    updatePortfolioValidationSchema,
};
