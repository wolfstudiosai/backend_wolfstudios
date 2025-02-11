import { CampaignStatus } from "@prisma/client";
import { z } from "zod";

const createCampaignValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }),
    guideline: z.string().optional(),
    campaign_image: z.string().optional(),
    content_engagement: z.number().default(0),
    content_hq: z.string().optional(),
    note: z.string().optional(),
    stakeholder: z.string().optional(),
    campaign_status: z.nativeEnum(CampaignStatus).optional(),
    retail_partners: z.string().optional(),
    proposed_partners: z.string().optional(),
    live_partners: z.string().optional(),
    contributed_partners: z.string().optional(),
    image_gallery: z.array(z.string()).optional(),
    video_gallery: z.array(z.string()).optional(),
    budget: z.number().optional(),
    total_expense: z.number().optional(),
    campaign_ROI: z.string().optional(),
    start_date: z.string().optional(),
    end_date: z.string().optional(),
    description: z.string().optional(),
    spaces: z.string().optional(),
    product_expense: z.number().optional(),
  })
    .strict(),
});

const updateCampaignValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    guideline: z.string().optional(),
    campaign_image: z.string().optional(),
    content_engagement: z.number().optional(),
    content_hq: z.string().optional(),
    note: z.string().optional(),
    stakeholder: z.string().optional(),
    campaign_status: z.nativeEnum(CampaignStatus).optional(),
    retail_partners: z.string().optional(),
    proposed_partners: z.string().optional(),
    live_partners: z.string().optional(),
    contributed_partners: z.string().optional(),
    image_gallery: z.array(z.string()).optional(),
    video_gallery: z.array(z.string()).optional(),
    budget: z.number().optional(),
    total_expense: z.number().optional(),
    campaign_ROI: z.string().optional(),
    start_date: z.string().optional(),
    end_date: z.string().optional(),
    description: z.string().optional(),
    spaces: z.string().optional(),
    product_expense: z.number().optional(),
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
