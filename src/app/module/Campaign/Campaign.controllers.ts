import { Request } from "express";
import httpStatus from "http-status";
import { TAuthUser } from "../../interfaces/common";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { pick } from "../../utils/pick";
import { campaignFilterableFields } from "./Campaign.constants";
import { CampaignServices } from "./Campaign.services";

const createCampaign = catchAsync(async (req: Request & { user?: TAuthUser }, res, next) => {
    const result = await CampaignServices.createCampaign(req.user as TAuthUser, req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Campaign created successfully",
        data: result,
    });
});


const getCampaigns = catchAsync(async (req, res, next) => {
    const filteredQuery = pick(req.query, campaignFilterableFields);
    const result = await CampaignServices.getCampaigns(filteredQuery);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Campaigns retrieved successfully",
        meta: result.meta,
        data: result.data,
    });
});

export const CampaignControllers = {
    createCampaign,
    getCampaigns
}