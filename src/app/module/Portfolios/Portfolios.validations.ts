import { z } from "zod";

export const createPortfolioValidationSchema = z.object({
  body: z.object({
    project_title: z.string({ required_error: "Project title is required" }).min(1, "Project title is required"),
    category: z.string().optional(),
    video_url: z.string().url({ message: "Invalid video URL" }).optional(),
    hero_image: z.string().optional(),
    field_image: z.string().optional(),
    thumbnail: z.string().optional(),
    vertical_gallery_images: z.array(z.string()).default([]),
    horizontal_gallery_images: z.array(z.string()).default([]),
    date: z.string().optional(),
    short_description: z.string().optional(),
    full_description: z.string().optional(),
    state: z.string().optional(),
    partner_hq: z.string().optional(),
  }).strict()
});

export const updatePortfolioValidationSchema = z.object({
  body: z.object({
    project_title: z.string().optional(),
    category: z.string().optional(),
    video_url: z.string().url({ message: "Invalid video URL" }).optional(),
    hero_image: z.string().optional(),
    field_image: z.string().optional(),
    thumbnail: z.string().optional(),
    vertical_gallery_images: z.array(z.string()).optional(),
    horizontal_gallery_images: z.array(z.string()).optional(),
    date: z.string().optional(),
    short_description: z.string().optional(),
    full_description: z.string().optional(),
    state: z.string().optional(),
    partner_hq: z.string().optional(),
  }).strict()
});

const deletePortfolioValidationSchema = z.object({
  body: z.object({
    ids: z.array(z.string({ invalid_type_error: "Id should be a text" }).regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/, "Invalid ID"), { message: "Array of ids is required" }).min(1, "Id is required")
  })
});

export const PortfolioValidations = {
  createPortfolioValidationSchema,
  updatePortfolioValidationSchema,
  deletePortfolioValidationSchema
}