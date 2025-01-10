import { EPortfolioStatus, EPortfolioType } from "./Portfolios.enum"; // Assuming this imports the enum
import { z } from "zod";

// Validation schema for creating a portfolio
const createPortfolioValidationSchema = z.object({
  type: z.nativeEnum(EPortfolioType),
  name: z.string().min(1, { message: "Name is required" }),
  status: z.nativeEnum(EPortfolioStatus),
  model: z.string().optional(),
  days_location: z.string().optional(),
  sessions: z.string().optional(),
  producer: z.string().optional(),
  production_studio: z.string().optional(),
  location: z.string().optional(),
  talent: z.string().optional(),
  creation_10_images_services_provide: z.string().optional(),
  brand: z.string().optional(),
  deliverables: z.string().optional(),
});

// Validation schema for updating a portfolio
// For updating, most fields can be optional (but the id must still be provided)
const updatePortfolioValidationSchema = z.object({
  type: z.nativeEnum(EPortfolioType).optional(),
  status: z.nativeEnum(EPortfolioStatus).optional(),
  name: z.string().min(1, { message: "Name is required" }).optional(),
  model: z.string().optional(),
  days_location: z.string().optional(),
  sessions: z.string().optional(),
  producer: z.string().optional(),
  production_studio: z.string().optional(),
  location: z.number().optional(),
  talent: z.string().optional(),
  creation_10_images_services_provide: z.string().optional(),
  brand: z.string().optional(),
  deliverables: z.string().optional(),
});

// Exporting the validation schemas
export const PortfolioValidations = {
  createPortfolioValidationSchema,
  updatePortfolioValidationSchema,
};
