import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { CampaignGroupServices } from "./campaign_group.services";

const createCampaignGroup = catchAsync(async (req, res, next) => {
    const result = await CampaignGroupServices.createCampaignGroup(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Campaign group created successfully",
        data: result,
    });
});


const getCampaignGroups = catchAsync(async (req, res, next) => {
    const result = await CampaignGroupServices.getCampaignGroups(req.query);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Campaign groups retrieved successfully",
        meta: result.meta,
        data: result.data,
    });
});

const updateCampaignGroup = catchAsync(async (req, res, next) => {
    const result = await CampaignGroupServices.updateCampaignGroup(req.params.id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Campaign group updated successfully",
        data: result,
    });
});

const deleteCampaignGroups = catchAsync(async (req, res, next) => {
    const result = await CampaignGroupServices.deleteCampaignGroups(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Campaign group deleted successfully",
        data: result,
    });
});

export const CampaignGroupControllers = {
    createCampaignGroup,
    getCampaignGroups,
    updateCampaignGroup,
    deleteCampaignGroups
}