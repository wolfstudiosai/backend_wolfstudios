import { UserRole } from "@prisma/client";
import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { fileUploader } from "../../utils/fileUploader";
import { FileControllers } from "./File.controllers";
import { FileValidations } from "./FileValidations";

const router = Router();

router.post(
    "/upload",
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
    fileUploader.multipleUpload,
    FileControllers.filesUpload
);

router.delete(
    "/delete-files",
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.USER),
    validateRequest(FileValidations.deleteFilesValidationSchema),
    FileControllers.deleteFiles
);

export const FileRoutes = router;
