import { Prisma } from "@prisma/client";
import httpStatus from "http-status";
import { sortOrderType } from "../../constants/common";
import ApiError from "../../error/ApiError";
import prisma from "../../shared/prisma";
import fieldValidityChecker from "../../utils/fieldValidityChecker";
import pagination from "../../utils/pagination";
import {
  dataManagementSearchableFields,
  dataManagementSortableFields,
} from "./Content.constants";
import { TCreateContentPayload } from "./Content.interface";

const createContent = async (payload: TCreateContentPayload) => {
  let month_uploaded = null;
  if (payload.month_uploaded)
    month_uploaded = new Date(payload.month_uploaded as string);
  const result = await prisma.contentHQ.create({
    data: {
      ...payload,
      month_uploaded: month_uploaded,
    },
  });
  return result;
};

const getContents = async (query: Record<string, any>) => {
  const { searchTerm, page, limit, sortBy, sortOrder, id, ...remainingQuery } =
    query;
  if (sortBy) {
    fieldValidityChecker(dataManagementSortableFields, sortBy);
  }
  if (sortOrder) {
    fieldValidityChecker(sortOrderType, sortOrder);
  }

  const { pageNumber, limitNumber, skip, sortWith, sortSequence } = pagination({
    page,
    limit,
    sortBy,
    sortOrder,
  });

  const andConditions: Prisma.ContentHQWhereInput[] = [];

  if (id)
    andConditions.push({
      id: id,
    });

  if (searchTerm) {
    andConditions.push({
      OR: dataManagementSearchableFields.map((field) => {
        return {
          [field]: {
            contains: searchTerm,
            mode: "insensitive",
          },
        };
      }),
    });
  }

  if (Object.keys(remainingQuery).length) {
    Object.keys(remainingQuery).forEach((key) => {
      andConditions.push({
        [key]: remainingQuery[key],
      });
    });
  }

  const whereConditons = {
    AND: andConditions,
  };

  const result = await prisma.contentHQ.findMany({
    where: whereConditons,
    skip,
    take: limitNumber,
    orderBy: {
      [sortWith]: sortSequence,
    },
  });

  const total = await prisma.contentHQ.count({ where: whereConditons });

  return {
    meta: {
      page: pageNumber,
      limit: limitNumber,
      total,
    },
    data: result,
  };
};

const updateContent = async (id: string, payload: Record<string, any>) => {
  const result = await prisma.contentHQ.update({
    where: {
      id: id,
    },
    data: payload,
  });
  return result;
};

const deleteContents = async ({ ids }: { ids: string[] }) => {
  const records = await prisma.contentHQ.findMany({
    where: {
      id: {
        in: ids
      }
    }
  })

  if (!records?.length) {
    throw new ApiError(httpStatus.NOT_FOUND, "No record found to delete")
  }

  const result = await prisma.contentHQ.deleteMany({
    where: {
      id: {
        in: ids
      }
    }
  })
  return {
    deleted_count: result.count,
    message: `${result.count} records deleted successfully`
  };
};

export const ContentServices = {
  createContent,
  getContents,
  updateContent,
  deleteContents
};
