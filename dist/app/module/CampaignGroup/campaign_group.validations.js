"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignGroupValidations = void 0;
const zod_1 = require("zod");
const createCampaignGroupValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Name is required" }),
        description: zod_1.z.string().optional(),
    })
});
const updateCampaignGroupValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
    })
});
const deleteCampaignGroupValidationSchema = zod_1.z.object({
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
exports.CampaignGroupValidations = {
    createCampaignGroupValidationSchema,
    updateCampaignGroupValidationSchema,
    deleteCampaignGroupValidationSchema
};
