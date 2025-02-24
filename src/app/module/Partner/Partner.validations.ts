
import { AffiliatePlatform, ClientStatus, PartnerCurrentStatus, PartnerJourneyStep, PaymentStatus, ProfileCategory, ProfileStatus, SocialPlatform } from "@prisma/client";
import { z } from "zod";

const addPartnerValidationSchema = z.object({
    body: z.object({
        name: z.string(),
        email: z.string().optional().nullable(),
        phone: z.string().optional().nullable(),
        whatsapp: z.string().optional().nullable(),
        profile_image: z.string().optional().nullable(),
        city: z.string().optional().nullable(),
        state: z.string().optional().nullable(),
        country: z.string().optional().nullable(),
        mailing_address: z.string().optional().nullable(),
        website: z.string().optional().nullable(),
        instagram: z.string().optional().nullable(),
        instagram_following: z.number().default(0),
        tiktok: z.string().optional().nullable(),
        tiktok_following: z.number().default(0),
        youtube: z.string().optional().nullable(),
        youtube_following: z.number().default(0),
        x: z.string().optional().nullable(),
        x_following: z.number().default(0),
        facebook: z.string().optional().nullable(),
        facebook_following: z.number().default(0),
        pinterest: z.string().optional().nullable(),
        pinterest_following: z.number().default(0),
        snapchat: z.string().optional().nullable(),
        snapchat_following: z.number().default(0),
        linkedin: z.string().optional().nullable(),
        linkedin_connection: z.number().default(0),
        hourly_rate: z.number().optional().nullable(),
        partner_IG_rate: z.number().optional().nullable(),
        partner_TT_rate: z.number().optional().nullable(),
        partner_YT_rate: z.number().optional().nullable(),
        partner_UGC_rate: z.number().optional().nullable(),
        partner_360_rate: z.number().optional().nullable(),
        contract: z.string().optional().nullable(),
        tags: z.string().optional().nullable(),
        products: z.string().optional().nullable(),
        contributed_campaigns: z.string().optional().nullable(),
        live_campaign: z.string().optional().nullable(),
        profile_category: z.nativeEnum(ProfileCategory).optional().nullable(),
        current_status: z.nativeEnum(PartnerCurrentStatus).optional().nullable(),
        profile_status: z.nativeEnum(ProfileStatus).optional().nullable(),
        stakeholder: z.string().optional().nullable(),
        total_audience: z.number().optional().nullable(),
        sourced_from: z.string().optional().nullable(),
        partner_gallery: z.array(z.string()).default([]),
        booking_link: z.string().optional().nullable(),
        age_bracket: z.string().optional().nullable(),
        note: z.string().optional().nullable(),
        affiliate_platform: z.nativeEnum(AffiliatePlatform).optional().nullable(),
        medium: z.string().optional().nullable(),
        soundcloud: z.string().optional().nullable(),
        spotify: z.string().optional().nullable(),
        open_to_gifting: z.boolean().default(false),
        services: z.string().optional().nullable(),
        portfolio: z.string().optional().nullable(),
        case_studies: z.string().optional().nullable(),
        testimonials: z.string().optional().nullable(),
        production_hq: z.string().optional().nullable(),
        proposals: z.string().optional().nullable(),
        representation: z.string().optional().nullable(),
        occupation: z.string().optional().nullable(),
        payment_link: z.string().optional().nullable(),
        client: z.string().optional().nullable(),
        podcast: z.string().optional().nullable(),
        refusal_reason: z.string().optional().nullable(),
        twitch: z.string().optional().nullable(),
        revo_amazon_order_confirmation_number: z.string().optional().nullable(),
        amazon_review_link: z.string().optional().nullable(),
        amazon_review_cupper: z.string().optional().nullable(),
        amazon_review_the_pill: z.string().optional().nullable(),
        amazon_storefront: z.string().optional().nullable(),
        campaign_month: z.string().optional().nullable(),
        deliverables: z.string().optional().nullable(),
        google_drive_files: z.string().optional().nullable(),
        revo_IG_post: z.string().optional().nullable(),
        journey_step: z.nativeEnum(PartnerJourneyStep).optional().nullable(),
        amount_paid: z.number().optional().nullable(),
        total_contributed_engagement_by_content: z.number().optional().nullable(),
        platform_deliverables: z.nativeEnum(SocialPlatform).optional().nullable(),
        platform: z.array(z.nativeEnum(SocialPlatform)).default([]),
        revo_offer: z.string().optional().nullable(),
        remaining_credits: z.number().optional().nullable(),
        TT_post: z.string().optional().nullable(),
        YT_post: z.string().optional().nullable(),
        total_ROI: z.number().optional().nullable(),
        UGC_payment_status: z.nativeEnum(PaymentStatus).optional().nullable(),
        UGC_retainer_amount: z.number().optional().nullable(),
        UGC_tiktok_link: z.string().optional().nullable(),
        partner_post_view: z.number().optional().nullable(),
        estimated_taxes: z.number().optional().nullable(),
        shipping_FBA_fee_gifted_partner: z.number().optional().nullable(),
        paypal_fee: z.number().optional().nullable(),
        amazon_referral_fee: z.number().optional().nullable(),
        amazon_order_total: z.number().optional().nullable(),
        AI_profile: z.string().optional().nullable(),
        amazon_tax: z.number().optional().nullable(),
        amazon_kickback: z.number().optional().nullable(),
        month_sourced: z.string().optional().nullable(),
        second_payment_date: z.string().optional().nullable(),
        client_status: z.nativeEnum(ClientStatus).optional().nullable(),
        facilities: z.string().optional().nullable(),
        record_id: z.string().optional().nullable(),
        record_id_text: z.string().optional().nullable(),
        receipts: z.array(z.string()).default([]),
        destinations: z.string().optional().nullable(),
        revo_content_performance: z.string().optional().nullable(),
        proposed_campaigns: z.string().optional().nullable(),
        media_kit: z.array(z.string()).default([]),
        revo_counter_offer: z.string().optional().nullable(),
        amazon_review_walking_pad_pro: z.string().optional().nullable(),
        amazon_review_walking_pad_standard: z.string().optional().nullable(),
        amazon_review_oil: z.string().optional().nullable(),
        amazon_review_soothing_cream: z.string().optional().nullable(),
        amazon_review_beauty_wand: z.string().optional().nullable(),
        open_to_whitelisting: z.boolean().default(false),
    }).strict(),
});


const updatePartnerValidationSchema = z.object({
    body: z.object({
        name: z.string().optional().nullable(),
        email: z.string().optional().nullable(),
        phone: z.string().optional().nullable(),
        whatsapp: z.string().optional().nullable(),
        profile_image: z.string().optional().nullable(),
        city: z.string().optional().nullable(),
        state: z.string().optional().nullable(),
        country: z.string().optional().nullable(),
        mailing_address: z.string().optional().nullable(),
        website: z.string().optional().nullable(),
        instagram: z.string().optional().nullable(),
        instagram_following: z.number().optional().nullable(),
        tiktok: z.string().optional().nullable(),
        tiktok_following: z.number().optional().nullable(),
        youtube: z.string().optional().nullable(),
        youtube_following: z.number().optional().nullable(),
        x: z.string().optional().nullable(),
        x_following: z.number().optional().nullable(),
        facebook: z.string().optional().nullable(),
        facebook_following: z.number().optional().nullable(),
        pinterest: z.string().optional().nullable(),
        pinterest_following: z.number().optional().nullable(),
        snapchat: z.string().optional().nullable(),
        snapchat_following: z.number().optional().nullable(),
        linkedin: z.string().optional().nullable(),
        linkedin_connection: z.number().optional().nullable(),
        hourly_rate: z.number().optional().nullable(),
        partner_IG_rate: z.number().optional().nullable(),
        partner_TT_rate: z.number().optional().nullable(),
        partner_YT_rate: z.number().optional().nullable(),
        partner_UGC_rate: z.number().optional().nullable(),
        partner_360_rate: z.number().optional().nullable(),
        contract: z.string().optional().nullable(),
        tags: z.string().optional().nullable(),
        products: z.string().optional().nullable(),
        contributed_campaigns: z.string().optional().nullable(),
        live_campaign: z.string().optional().nullable(),
        profile_category: z.nativeEnum(ProfileCategory).optional().nullable(),
        current_status: z.nativeEnum(PartnerCurrentStatus).optional().nullable(),
        profile_status: z.nativeEnum(ProfileStatus).optional().nullable(),
        stakeholder: z.string().optional().nullable(),
        total_audience: z.number().optional().nullable(),
        sourced_from: z.string().optional().nullable(),
        partner_gallery: z.array(z.string()).optional().nullable(),
        booking_link: z.string().optional().nullable(),
        age_bracket: z.string().optional().nullable(),
        note: z.string().optional().nullable(),
        affiliate_platform: z.nativeEnum(AffiliatePlatform).optional().nullable(),
        medium: z.string().optional().nullable(),
        soundcloud: z.string().optional().nullable(),
        spotify: z.string().optional().nullable(),
        open_to_gifting: z.boolean().optional().nullable(),
        services: z.string().optional().nullable(),
        portfolio: z.string().optional().nullable(),
        case_studies: z.string().optional().nullable(),
        testimonials: z.string().optional().nullable(),
        production_hq: z.string().optional().nullable(),
        proposals: z.string().optional().nullable(),
        representation: z.string().optional().nullable(),
        occupation: z.string().optional().nullable(),
        payment_link: z.string().optional().nullable(),
        client: z.string().optional().nullable(),
        podcast: z.string().optional().nullable(),
        refusal_reason: z.string().optional().nullable(),
        twitch: z.string().optional().nullable(),
        revo_amazon_order_confirmation_number: z.string().optional().nullable(),
        amazon_review_link: z.string().optional().nullable(),
        amazon_review_cupper: z.string().optional().nullable(),
        amazon_review_the_pill: z.string().optional().nullable(),
        amazon_storefront: z.string().optional().nullable(),
        campaign_month: z.string().optional().nullable(),
        deliverables: z.string().optional().nullable(),
        google_drive_files: z.string().optional().nullable(),
        revo_IG_post: z.string().optional().nullable(),
        journey_step: z.nativeEnum(PartnerJourneyStep).optional().nullable(),
        amount_paid: z.number().optional().nullable(),
        total_contributed_engagement_by_content: z.number().optional().nullable(),
        platform_deliverables: z.nativeEnum(SocialPlatform).optional().nullable(),
        platform: z.array(z.nativeEnum(SocialPlatform)).optional().nullable(),
        revo_offer: z.string().optional().nullable(),
        remaining_credits: z.number().optional().nullable(),
        TT_post: z.string().optional().nullable(),
        YT_post: z.string().optional().nullable(),
        total_ROI: z.number().optional().nullable(),
        UGC_payment_status: z.nativeEnum(PaymentStatus).optional().nullable(),
        UGC_retainer_amount: z.number().optional().nullable(),
        UGC_tiktok_link: z.string().optional().nullable(),
        partner_post_view: z.number().optional().nullable(),
        estimated_taxes: z.number().optional().nullable(),
        shipping_FBA_fee_gifted_partner: z.number().optional().nullable(),
        paypal_fee: z.number().optional().nullable(),
        amazon_referral_fee: z.number().optional().nullable(),
        amazon_order_total: z.number().optional().nullable(),
        AI_profile: z.string().optional().nullable(),
        amazon_tax: z.number().optional().nullable(),
        amazon_kickback: z.number().optional().nullable(),
        month_sourced: z.string().optional().nullable(),
        second_payment_date: z.string().optional().nullable(),
        client_status: z.nativeEnum(ClientStatus).optional().nullable(),
        facilities: z.string().optional().nullable(),
        record_id: z.string().optional().nullable(),
        record_id_text: z.string().optional().nullable(),
        receipts: z.array(z.string()).optional().nullable(),
        destinations: z.string().optional().nullable(),
        revo_content_performance: z.string().optional().nullable(),
        proposed_campaigns: z.string().optional().nullable(),
        media_kit: z.array(z.string()).optional().nullable(),
        revo_counter_offer: z.string().optional().nullable(),
        amazon_review_walking_pad_pro: z.string().optional().nullable(),
        amazon_review_walking_pad_standard: z.string().optional().nullable(),
        amazon_review_oil: z.string().optional().nullable(),
        amazon_review_soothing_cream: z.string().optional().nullable(),
        amazon_review_beauty_wand: z.string().optional().nullable(),
        open_to_whitelisting: z.boolean().optional().nullable(),
    }).strict()
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