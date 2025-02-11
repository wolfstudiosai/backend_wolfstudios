"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnerValidations = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const addPartnerValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Partner name is required" }),
        email: zod_1.z.string().email().nullable().optional(),
        phone: zod_1.z.string().nullable().optional(),
        profile_image: zod_1.z.string().nullable().optional(),
        website: zod_1.z.string().nullable().optional(),
        state: zod_1.z.string().nullable().optional(),
        tags: zod_1.z.array(zod_1.z.string()).default([]),
        instagram: zod_1.z.string().nullable().optional(),
        instagram_following: zod_1.z.number().nullable().optional(),
        tiktok: zod_1.z.string().nullable().optional(),
        tiktok_following: zod_1.z.number().nullable().optional(),
        youtube: zod_1.z.string().nullable().optional(),
        youtube_following: zod_1.z.number().nullable().optional(),
        x: zod_1.z.string().nullable().optional(),
        x_following: zod_1.z.number().nullable().optional(),
        facebook: zod_1.z.string().nullable().optional(),
        facebook_following: zod_1.z.number().nullable().optional(),
        pinterest: zod_1.z.string().nullable().optional(),
        pinterest_following: zod_1.z.number().nullable().optional(),
        partner_IG_rate: zod_1.z.number().nullable().optional(),
        partner_TT_rate: zod_1.z.number().nullable().optional(),
        partner_YT_rate: zod_1.z.number().nullable().optional(),
        partner_UGC_rate: zod_1.z.number().nullable().optional(),
        partner_360_rate: zod_1.z.number().nullable().optional(),
        contract: zod_1.z.string().nullable().optional(),
        products: zod_1.z.string().nullable().optional(),
        contributed_campaigns: zod_1.z.string().nullable().optional(),
        profile_category: zod_1.z.nativeEnum(client_1.ProfileCategory).nullable().optional(),
        current_status: zod_1.z.nativeEnum(client_1.CurrentStatus).nullable().optional(),
        profile_status: zod_1.z.string().nullable().optional(),
        stakeholder: zod_1.z.string().nullable().optional(),
        total_audience: zod_1.z.number().nullable().optional(),
        sourced_from: zod_1.z.string().nullable().optional(),
    })
});
const updatePartnerValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().nullable().optional(),
        email: zod_1.z.string().email().nullable().optional(),
        phone: zod_1.z.string().nullable().optional(),
        profile_image: zod_1.z.string().nullable().optional(),
        website: zod_1.z.string().nullable().optional(),
        state: zod_1.z.string().nullable().optional(),
        tags: zod_1.z.array(zod_1.z.string()).nullable().optional(),
        instagram: zod_1.z.string().nullable().optional(),
        instagram_following: zod_1.z.number().nullable().optional(),
        tiktok: zod_1.z.string().nullable().optional(),
        tiktok_following: zod_1.z.number().nullable().optional(),
        youtube: zod_1.z.string().nullable().optional(),
        youtube_following: zod_1.z.number().nullable().optional(),
        x: zod_1.z.string().nullable().optional(),
        x_following: zod_1.z.number().nullable().optional(),
        facebook: zod_1.z.string().nullable().optional(),
        facebook_following: zod_1.z.number().nullable().optional(),
        pinterest: zod_1.z.string().nullable().optional(),
        pinterest_following: zod_1.z.number().nullable().optional(),
        partner_IG_rate: zod_1.z.number().nullable().optional(),
        partner_TT_rate: zod_1.z.number().nullable().optional(),
        partner_YT_rate: zod_1.z.number().nullable().optional(),
        partner_UGC_rate: zod_1.z.number().nullable().optional(),
        partner_360_rate: zod_1.z.number().nullable().optional(),
        contract: zod_1.z.string().nullable().optional(),
        products: zod_1.z.string().nullable().optional(),
        contributed_campaigns: zod_1.z.string().nullable().optional(),
        profile_category: zod_1.z.nativeEnum(client_1.ProfileCategory).nullable().optional(),
        current_status: zod_1.z.nativeEnum(client_1.CurrentStatus).nullable().optional(),
        profile_status: zod_1.z.string().nullable().optional(),
        stakeholder: zod_1.z.string().nullable().optional(),
        total_audience: zod_1.z.number().nullable().optional(),
        sourced_from: zod_1.z.string().nullable().optional(),
    })
});
const deletePartnerValidationSchema = zod_1.z.object({
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
exports.PartnerValidations = {
    addPartnerValidationSchema,
    updatePartnerValidationSchema,
    deletePartnerValidationSchema
};
