import { Prisma } from "@prisma/client";
import { Request } from "express";
import httpStatus from "http-status";
import sharp from "sharp";
import config from "../../config";
import ApiError from "../../error/ApiError";
import { TAuthUser } from "../../interfaces/common";
import { TFiles } from "../../interfaces/file";
import prisma from "../../shared/prisma";
import supabase from "../../shared/supabase";
import { allowedFileType } from "./File.constants";

const filesUpload = async (req: Request & { user?: TAuthUser }) => {
  const files = req.files as TFiles;
  const user = req.user as TAuthUser;

  if (!files?.files?.length) {
    throw new ApiError(httpStatus.BAD_REQUEST, "No file found");
  }

  const prepared_files: Prisma.FileCreateManyInput[] = [];

  if (files?.files) {
    for (let i = 0; i < files.files.length; i++) {
      const file = files.files[i];
      if (!allowedFileType.includes(file.mimetype)) {
        continue;
      }
      const name = `${Date.now()}-${file.originalname}`;
      const metadata = await sharp(file.buffer).metadata();
      const { data } = await supabase.storage
        .from(config.supabase_bucket_general)
        .upload(name, file.buffer, {
          contentType: file.mimetype,
        });

      if (data?.id) {
        prepared_files.push({
          user_id: user.id,
          name: file.originalname,
          alt_text: file.originalname.replace(/\.[^/.]+$/, ""),
          type: file.mimetype,
          size: file.size,
          width: metadata.width || 0,
          height: metadata.height || 0,
          path: `/${config.supabase_bucket_general}/${data.path}`,
          bucket_id: data.id,
        });
      }
    }
  }

  const uploaded_files = prepared_files.map((i) => i.path);

  const result = await prisma.$transaction(async (tx) => {
    await prisma.file.createMany({
      data: prepared_files,
      skipDuplicates: true,
    });

    const files = await prisma.file.findMany({
      where: {
        path: {
          in: uploaded_files,
        },
      },
      select: {
        name: true,
        path: true,
      },
    });

    return files;
  });

  return result;
};

const deleteFiles = async (payload: { paths: string[] }) => {
  const { paths } = payload;
  const updatedPaths = paths.map((path) => path.replace("/general/", ""));

  const { data, error } = await supabase.storage
    .from("general")
    .remove(updatedPaths);

  if ((error as any)?.status === 400 || data?.length === 0)
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "No valid file path found to delete"
    );

  const deletedFilesBucketId = data?.map((file) => file.id);

  const result = await prisma.file.deleteMany({
    where: {
      bucket_id: {
        in: deletedFilesBucketId,
      },
    },
  });

  return {
    deleted_count: result.count,
    message: `${result.count} files has been deleted`,
  };
};

export const FileServices = {
  filesUpload,
  deleteFiles,
};
