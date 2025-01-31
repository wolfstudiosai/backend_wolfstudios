"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioValidations = exports.updatePortfolioValidationSchema = exports.createPortfolioValidationSchema = void 0;
const zod_1 = require("zod");
exports.createPortfolioValidationSchema = zod_1.z.object({
    body: zod_1.z
        .object({
        project_title: zod_1.z
            .string({ required_error: "Project title is required" })
            .min(1, "Project title is required"),
        category: zod_1.z.string().optional().nullable(),
        video_url: zod_1.z.string().optional().nullable(),
        hero_image: zod_1.z.string().optional().nullable(),
        field_image: zod_1.z.string().optional().nullable(),
        thumbnail: zod_1.z.string().optional().nullable(),
        vertical_gallery_images: zod_1.z.array(zod_1.z.string()).default([]),
        horizontal_gallery_images: zod_1.z.array(zod_1.z.string()).default([]),
        date: zod_1.z.string().optional().nullable(),
        short_description: zod_1.z.string().optional().nullable(),
        full_description: zod_1.z.string().optional().nullable(),
        state: zod_1.z.string().optional().nullable(),
        partner_hq: zod_1.z.string().optional().nullable(),
    })
        .strict(),
});
exports.updatePortfolioValidationSchema = zod_1.z.object({
    body: zod_1.z
        .object({
        project_title: zod_1.z.string().optional(),
        category: zod_1.z.string().optional().nullable(),
        video_url: zod_1.z.string().optional().nullable(),
        hero_image: zod_1.z.string().optional().nullable(),
        field_image: zod_1.z.string().optional().nullable(),
        thumbnail: zod_1.z.string().optional().nullable(),
        vertical_gallery_images: zod_1.z.array(zod_1.z.string()).optional(),
        horizontal_gallery_images: zod_1.z.array(zod_1.z.string()).optional(),
        date: zod_1.z.string().optional().nullable(),
        short_description: zod_1.z.string().optional().nullable(),
        full_description: zod_1.z.string().optional().nullable(),
        state: zod_1.z.string().optional().nullable(),
        partner_hq: zod_1.z.string().optional().nullable(),
        featured: zod_1.z.boolean().optional(),
    })
        .strict(),
});
const deletePortfolioValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        ids: zod_1.z
            .array(zod_1.z
            .string({ invalid_type_error: "Id should be a text" })
            .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/, "Invalid ID"), { message: "Array of ids is required" })
            .min(1, "Id is required"),
    }),
});
exports.PortfolioValidations = {
    createPortfolioValidationSchema: exports.createPortfolioValidationSchema,
    updatePortfolioValidationSchema: exports.updatePortfolioValidationSchema,
    deletePortfolioValidationSchema,
};
