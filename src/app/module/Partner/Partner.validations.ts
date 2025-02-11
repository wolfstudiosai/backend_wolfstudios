import { CurrentStatus, ProfileCategory } from "@prisma/client";
import { z } from "zod";

const addPartnerValidationSchema = z.object({
    body: z.object({
        name: z.string({ required_error: "Partner name is required" }),
        email: z.string().email().nullable().optional(),
        phone: z.string().nullable().optional(),
        profile_image: z.string().nullable().optional(),
        website: z.string().nullable().optional(),
        state: z.string().nullable().optional(),
        tags: z.array(z.string()).default([]),
        instagram: z.string().nullable().optional(),
        instagram_following: z.number().nullable().optional(),
        tiktok: z.string().nullable().optional(),
        tiktok_following: z.number().nullable().optional(),
        youtube: z.string().nullable().optional(),
        youtube_following: z.number().nullable().optional(),
        x: z.string().nullable().optional(),
        x_following: z.number().nullable().optional(),
        facebook: z.string().nullable().optional(),
        facebook_following: z.number().nullable().optional(),
        pinterest: z.string().nullable().optional(),
        pinterest_following: z.number().nullable().optional(),
        partner_IG_rate: z.number().nullable().optional(),
        partner_TT_rate: z.number().nullable().optional(),
        partner_YT_rate: z.number().nullable().optional(),
        partner_UGC_rate: z.number().nullable().optional(),
        partner_360_rate: z.number().nullable().optional(),
        contract: z.string().nullable().optional(),
        products: z.string().nullable().optional(),
        contributed_campaigns: z.string().nullable().optional(),
        profile_category: z.nativeEnum(ProfileCategory).nullable().optional(),
        current_status: z.nativeEnum(CurrentStatus).nullable().optional(),
        profile_status: z.string().nullable().optional(),
        stakeholder: z.string().nullable().optional(),
        total_audience: z.number().nullable().optional(),
        sourced_from: z.string().nullable().optional(),
    })
});


const updatePartnerValidationSchema = z.object({
    body: z.object({
        name: z.string().nullable().optional(),
        email: z.string().email().nullable().optional(),
        phone: z.string().nullable().optional(),
        profile_image: z.string().nullable().optional(),
        website: z.string().nullable().optional(),
        state: z.string().nullable().optional(),
        tags: z.array(z.string()).nullable().optional(),
        instagram: z.string().nullable().optional(),
        instagram_following: z.number().nullable().optional(),
        tiktok: z.string().nullable().optional(),
        tiktok_following: z.number().nullable().optional(),
        youtube: z.string().nullable().optional(),
        youtube_following: z.number().nullable().optional(),
        x: z.string().nullable().optional(),
        x_following: z.number().nullable().optional(),
        facebook: z.string().nullable().optional(),
        facebook_following: z.number().nullable().optional(),
        pinterest: z.string().nullable().optional(),
        pinterest_following: z.number().nullable().optional(),
        partner_IG_rate: z.number().nullable().optional(),
        partner_TT_rate: z.number().nullable().optional(),
        partner_YT_rate: z.number().nullable().optional(),
        partner_UGC_rate: z.number().nullable().optional(),
        partner_360_rate: z.number().nullable().optional(),
        contract: z.string().nullable().optional(),
        products: z.string().nullable().optional(),
        contributed_campaigns: z.string().nullable().optional(),
        profile_category: z.nativeEnum(ProfileCategory).nullable().optional(),
        current_status: z.nativeEnum(CurrentStatus).nullable().optional(),
        profile_status: z.string().nullable().optional(),
        stakeholder: z.string().nullable().optional(),
        total_audience: z.number().nullable().optional(),
        sourced_from: z.string().nullable().optional(),
    })
});


const deletePartnerValidationSchema = z.object({
    body: z
        .object({
            ids: z
                .array(
                    z
                        .string({ invalid_type_error: "Id should be a text" })
                        .regex(
                            /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
                            "Invalid ID"
                        )
                )
                .min(1, "Id is required"),
        })
        .strict(),
});

export const PartnerValidations = {
    addPartnerValidationSchema,
    updatePartnerValidationSchema,
    deletePartnerValidationSchema
};