import { Request } from "express";
import httpStatus from "http-status";
import { TAuthUser } from "../../interfaces/common";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
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

export const CampaignControllers = {
    createCampaign
}