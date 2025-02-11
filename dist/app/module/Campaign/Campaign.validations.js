"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignValidations = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const createCampaignValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required" }),
        campaign_group_id: zod_1.z
            .string({ invalid_type_error: "Campaign group id should be a text", required_error: "Campaign group id is required" })
            .regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/, "Invalid ID"),
        guideline: zod_1.z.string().nullable().optional(),
        campaign_image: zod_1.z.string().nullable().optional(),
        content_engagement: zod_1.z.number().default(0),
        content_hq: zod_1.z.string().nullable().optional(),
        note: zod_1.z.string().nullable().optional(),
        stakeholder: zod_1.z.string().nullable().optional(),
        campaign_status: zod_1.z.nativeEnum(client_1.CampaignStatus).nullable().optional(),
        retail_partners: zod_1.z.string().nullable().optional(),
        proposed_partners: zod_1.z.string().nullable().optional(),
        live_partners: zod_1.z.string().nullable().optional(),
        contributed_partners: zod_1.z.string().nullable().optional(),
        image_gallery: zod_1.z.array(zod_1.z.string()).nullable().optional(),
        video_gallery: zod_1.z.array(zod_1.z.string()).nullable().optional(),
        budget: zod_1.z.number().nullable().optional(),
        total_expense: zod_1.z.number().nullable().optional(),
        campaign_ROI: zod_1.z.string().nullable().optional(),
        start_date: zod_1.z.string().nullable().optional(),
        end_date: zod_1.z.string().nullable().optional(),
        description: zod_1.z.string().nullable().optional(),
        spaces: zod_1.z.string().nullable().optional(),
        product_expense: zod_1.z.number().nullable().optional(),
    })
        .strict(),
});
const updateCampaignValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().nullable().optional(),
        guideline: zod_1.z.string().nullable().optional(),
        campaign_image: zod_1.z.string().nullable().optional(),
        content_engagement: zod_1.z.number().nullable().optional(),
        content_hq: zod_1.z.string().nullable().optional(),
        note: zod_1.z.string().nullable().optional(),
        stakeholder: zod_1.z.string().nullable().optional(),
        campaign_status: zod_1.z.nativeEnum(client_1.CampaignStatus).nullable().optional(),
        retail_partners: zod_1.z.string().nullable().optional(),
        proposed_partners: zod_1.z.string().nullable().optional(),
        live_partners: zod_1.z.string().nullable().optional(),
        contributed_partners: zod_1.z.string().nullable().optional(),
        image_gallery: zod_1.z.array(zod_1.z.string()).nullable().optional(),
        video_gallery: zod_1.z.array(zod_1.z.string()).nullable().optional(),
        budget: zod_1.z.number().nullable().optional(),
        total_expense: zod_1.z.number().nullable().optional(),
        campaign_ROI: zod_1.z.string().nullable().optional(),
        start_date: zod_1.z.string().nullable().optional(),
        end_date: zod_1.z.string().nullable().optional(),
        description: zod_1.z.string().nullable().optional(),
        spaces: zod_1.z.string().nullable().optional(),
        product_expense: zod_1.z.number().nullable().optional(),
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
