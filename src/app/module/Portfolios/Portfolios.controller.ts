import { Request } from "express";
import httpStatus from "http-status";
import { TAuthUser } from "../../interfaces/common";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { pick } from "../../utils/pick";
import { portfolioFilterableFields } from "./Portfolios.constant";
import { PortfolioServices } from "./Portfolios.service";

const createPortfolio = catchAsync(async (req: Request & { user?: TAuthUser }, res, next) => {
    const result = await PortfolioServices.createPortfolio(req.user as TAuthUser, req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Portfolio created successfully",
        data: result,
    });
});

const getPortfolios = catchAsync(async (req: Request & { user?: TAuthUser }, res, next) => {
    const filteredQuery = pick(req.query, portfolioFilterableFields)
    const result = await PortfolioServices.getPortfolios(filteredQuery);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Portfolios retrieved successfully",
        meta: result.meta,
        data: result.data,
    });
});

const updatePortfolio = catchAsync(async (req, res, next) => {
    const result = await PortfolioServices.updatePortfolio(req.params.id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Portfolio updated successfully",
        data: result,
    });
});

const deletePortfolios = catchAsync(async (req, res, next) => {
    const result = await PortfolioServices.deletePortfolios(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Portfolio deleted successfully",
        data: result,
    });
});

export const PortfolioControllers = {
    createPortfolio,
    getPortfolios,
    updatePortfolio,
    deletePortfolios
}