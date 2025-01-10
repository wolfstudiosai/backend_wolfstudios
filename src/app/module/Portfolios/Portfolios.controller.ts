import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";
import { PortofolioService } from "./Portfolios.service";
import { TAuthUser } from "../../interfaces/common";
import { Request } from "express";

const createPortofolio = catchAsync(async (req: Request & { user?: TAuthUser }, res, next) => {
    const result = await PortofolioService.createPortofolio(req.user as TAuthUser, req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Portfolio created successfully",
        data: result,
    });
});

const getPortofolios = catchAsync(async (req, res, next) => {
    const result = await PortofolioService.getPortofolios(req.query);
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Portfolio retrieved successfully",
        meta: result.meta,
        data: result.data,
      });
});

const getPortofolioById = catchAsync(async (req, res, next) => {
    const result = await PortofolioService.getPortofolioById(req.params.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Portfolio retrieved successfully",
        data: result,
    });
});

const updatePortofolio = catchAsync(async (req, res, next) => {
    const result = await PortofolioService.updatePortofolio(req.params.id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Portfolio updated successfully",
        data: result,
    });
});

const deletePortofolio = catchAsync(async (req, res, next) => {
    const { ids } = req.body; 
    const result = await PortofolioService.deletePortofolio(ids);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Portfolio deleted successfully",
        data: result,
    });
});

export const PortfolioController = {
    createPortofolio,
    getPortofolios,
    getPortofolioById,
    updatePortofolio,
    deletePortofolio
};