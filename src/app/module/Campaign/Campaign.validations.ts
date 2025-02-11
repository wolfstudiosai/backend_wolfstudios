import { CampaignStatus } from "@prisma/client";
import { z } from "zod";

const createCampaignValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }),
    campaign_group_id: z
      .string({ invalid_type_error: "Campaign group id should be a text", required_error: "Campaign group id is required" })
      .regex(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
        "Invalid ID"
      ),
    guideline: z.string().nullable().optional(),
    campaign_image: z.string().nullable().optional(),
    content_engagement: z.number().default(0),
    content_hq: z.string().nullable().optional(),
    note: z.string().nullable().optional(),
    stakeholder: z.string().nullable().optional(),
    campaign_status: z.nativeEnum(CampaignStatus).nullable().optional(),
    retail_partners: z.string().nullable().optional(),
    proposed_partners: z.string().nullable().optional(),
    live_partners: z.string().nullable().optional(),
    contributed_partners: z.string().nullable().optional(),
    image_gallery: z.array(z.string()).nullable().optional(),
    video_gallery: z.array(z.string()).nullable().optional(),
    budget: z.number().nullable().optional(),
    total_expense: z.number().nullable().optional(),
    campaign_ROI: z.string().nullable().optional(),
    start_date: z.string().nullable().optional(),
    end_date: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    spaces: z.string().nullable().optional(),
    product_expense: z.number().nullable().optional(),
  })
    .strict(),
});

const updateCampaignValidationSchema = z.object({
  body: z.object({
    name: z.string().nullable().optional(),
    campaign_group_id: z
      .string({ invalid_type_error: "Campaign group id should be a text", required_error: "Campaign group id is required" })
      .regex(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
        "Invalid ID"
      ),
    guideline: z.string().nullable().optional(),
    campaign_image: z.string().nullable().optional(),
    content_engagement: z.number().nullable().optional(),
    content_hq: z.string().nullable().optional(),
    note: z.string().nullable().optional(),
    stakeholder: z.string().nullable().optional(),
    campaign_status: z.nativeEnum(CampaignStatus).nullable().optional(),
    retail_partners: z.string().nullable().optional(),
    proposed_partners: z.string().nullable().optional(),
    live_partners: z.string().nullable().optional(),
    contributed_partners: z.string().nullable().optional(),
    image_gallery: z.array(z.string()).nullable().optional(),
    video_gallery: z.array(z.string()).nullable().optional(),
    budget: z.number().nullable().optional(),
    total_expense: z.number().nullable().optional(),
    campaign_ROI: z.string().nullable().optional(),
    start_date: z.string().nullable().optional(),
    end_date: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    spaces: z.string().nullable().optional(),
    product_expense: z.number().nullable().optional(),
  })
    .strict(),
});

const deleteCampaignValidationSchema = z.object({
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

export const CampaignValidations = {
  createCampaignValidationSchema,
  updateCampaignValidationSchema,
  deleteCampaignValidationSchema,
};
