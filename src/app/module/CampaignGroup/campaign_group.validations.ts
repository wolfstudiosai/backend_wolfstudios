import { z } from "zod";

const createCampaignGroupValidationSchema = z.object({
    body: z.object({
        name: z.string({ required_error: "Name is required" }),
        description: z.string().optional(),
    })
});

const updateCampaignGroupValidationSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        description: z.string().optional(),
    })
})

const deleteCampaignGroupValidationSchema = z.object({
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

export const CampaignGroupValidations = {
    createCampaignGroupValidationSchema,
    updateCampaignGroupValidationSchema,
    deleteCampaignGroupValidationSchema
}