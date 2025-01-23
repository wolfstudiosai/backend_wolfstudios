import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { ContentServices } from "./Content.services";

const createContent = catchAsync(async (req, res, next) => {
  const result = await ContentServices.createContent(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Data management record created successfully",
    data: result,
  });
});

const getContents = catchAsync(async (req, res, next) => {
  const result = await ContentServices.getContents(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Data management record retrieved successfully",
    meta: result.meta,
    data: result.data,
  });
});

const updateContent = catchAsync(async (req, res, next) => {
  const result = await ContentServices.updateContent(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Data management record updated successfully",
    data: result,
  });
});

const deleteContents = catchAsync(async (req, res, next) => {
  const result = await ContentServices.deleteContents(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Records deleted successfully",
    data: result,
  });
});

export const ContentControllers = {
  createContent,
  getContents,
  updateContent,
  deleteContents
};
