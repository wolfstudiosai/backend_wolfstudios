import { Request } from "express";
import httpStatus from "http-status";
import { TAuthUser } from "../../interfaces/common";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { PartnerServices } from "./Partner.services";

const addPartner = catchAsync(async (req: Request & { user?: TAuthUser }, res, next) => {
    const result = await PartnerServices.addPartner(req.user as TAuthUser, req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Partner created successfully",
        data: result,
    });
});


const getPartners = catchAsync(async (req, res, next) => {
    const result = await PartnerServices.getPartners(req.query);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Partners retrieved successfully",
        meta: result.meta,
        data: result.data,
    });
});

const updatePartner = catchAsync(async (req, res, next) => {
    const result = await PartnerServices.updatePartner(req.params.id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Partner updated successfully",
        data: result,
    });
});

const deletePartners = catchAsync(async (req, res, next) => {
    const result = await PartnerServices.deletePartners(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Partner deleted successfully",
        data: result,
    });
});

export const PartnerControllers = {
    addPartner,
    getPartners,
    updatePartner,
    deletePartners
}