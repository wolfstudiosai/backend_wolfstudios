"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignValidations = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const createCampaignValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required" }),
        guideline: zod_1.z.string().optional(),
        campaign_image: zod_1.z.string().optional(),
        content_engagement: zod_1.z.number().default(0),
        content_hq: zod_1.z.string().optional(),
        note: zod_1.z.string().optional(),
        stakeholder: zod_1.z.string().optional(),
        campaign_status: zod_1.z.nativeEnum(client_1.CampaignStatus).optional(),
        retail_partners: zod_1.z.string().optional(),
        proposed_partners: zod_1.z.string().optional(),
        live_partners: zod_1.z.string().optional(),
        contributed_partners: zod_1.z.string().optional(),
        image_gallery: zod_1.z.array(zod_1.z.string()).optional(),
        video_gallery: zod_1.z.array(zod_1.z.string()).optional(),
        budget: zod_1.z.number().optional(),
        total_expense: zod_1.z.number().optional(),
        campaign_ROI: zod_1.z.string().optional(),
        start_date: zod_1.z.string().optional(),
        end_date: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        spaces: zod_1.z.string().optional(),
        product_expense: zod_1.z.number().optional(),
    })
        .strict(),
});
const updateCampaignValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        guideline: zod_1.z.string().optional(),
        campaign_image: zod_1.z.string().optional(),
        content_engagement: zod_1.z.number().optional(),
        content_hq: zod_1.z.string().optional(),
        note: zod_1.z.string().optional(),
        stakeholder: zod_1.z.string().optional(),
        campaign_status: zod_1.z.nativeEnum(client_1.CampaignStatus).optional(),
        retail_partners: zod_1.z.string().optional(),
        proposed_partners: zod_1.z.string().optional(),
        live_partners: zod_1.z.string().optional(),
        contributed_partners: zod_1.z.string().optional(),
        image_gallery: zod_1.z.array(zod_1.z.string()).optional(),
        video_gallery: zod_1.z.array(zod_1.z.string()).optional(),
        budget: zod_1.z.number().optional(),
        total_expense: zod_1.z.number().optional(),
        campaign_ROI: zod_1.z.string().optional(),
        start_date: zod_1.z.string().optional(),
        end_date: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        spaces: zod_1.z.string().optional(),
        product_expense: zod_1.z.number().optional(),
    })
        .strict(),
});
const deleteCampaignValidationSchema = zod_1.z.object({
    body: zod_1.z
        .object({
        ids: zod_1.z
            .array(zod_1.z
            .string({ invalid_type_error: "Id should be a text" })
            .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/, "Invalid ID"))
            .min(1, "Id is required"),
    })
        .strict(),
});
exports.CampaignValidations = {
    createCampaignValidationSchema,
    updateCampaignValidationSchema,
    deleteCampaignValidationSchema,
};
