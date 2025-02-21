import { Prisma } from "@prisma/client";
import { sortOrderType } from "../../constants/common";
import ApiError from "../../error/ApiError";
import { TAuthUser } from "../../interfaces/common";
import prisma from "../../shared/prisma";
import fieldValidityChecker from "../../utils/fieldValidityChecker";
import pagination from "../../utils/pagination";
import { slugGenerator } from "../../utils/slugGenerator";
import {
  portfolioSearchableFields,
  portfolioSortableFields,
} from "./Portfolios.constant";
import { ICreatePortfolio } from "./Portfolios.interface";

const createPortfolio = async (user: TAuthUser, data: ICreatePortfolio) => {
  let date: Date | null = null;
  if (data?.date?.length) {
    date = new Date(data.date);
  }
  const result = await prisma.portfolio.create({
    data: {
      ...data,
      slug: slugGenerator(data.project_title),
      user_id: user.id,
      date,
    },
  });
  return result;
};

const getPortfolios = async (query: Record<string, any>) => {
  let {
    searchTerm,
    page,
    limit,
    sortBy,
    sortOrder,
    id,
    slug,
    ...remainingQuery
  } = query;

  if ((!sortBy && page === String(1)) || (!sortBy && !page)) {
    sortBy = portfolioSortableFields[Math.floor(Math.random() * portfolioSortableFields.length)]
  }

  if (sortBy) {
    fieldValidityChecker(portfolioSortableFields, sortBy);
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

  const andConditions: Prisma.PortfolioWhereInput[] = [];

  if (id)
    andConditions.push({
      id: id,
    });
  if (slug)
    andConditions.push({
      slug,
    });

  if (searchTerm) {
    andConditions.push({
      OR: portfolioSearchableFields.map((field) => {
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

  const result = await prisma.portfolio.findMany({
    where: whereConditons,
    skip,
    take: limitNumber,
    orderBy: {
      [sortWith]: sortSequence,
    },
  });

  const total = await prisma.portfolio.count({ where: whereConditons });

  return {
    meta: {
      page: pageNumber,
      limit: limitNumber,
      total,
    },
    data: result,
  };
};

const updatePortfolio = async (id: string, payload: Record<string, any>) => {
  if (payload?.project_title) {
    payload.slug = slugGenerator(payload.project_title);
  }
  const result = await prisma.portfolio.update({
    where: {
      id: id,
    },
    data: payload,
  });
  return result;
};

const deletePortfolios = async ({ ids }: { ids: string[] }) => {
  const portfolios = await prisma.portfolio.findMany({
    where: {
      id: {
        in: ids,
      },
    },
  });

  if (!portfolios?.length) {
    throw new ApiError(httpStatus.NOT_FOUND, "No portfolio found to delete");
  }

  const result = await prisma.portfolio.deleteMany({
    where: {
      id: {
        in: ids,
      },
    },
  });
  return {
    deleted_count: result.count,
    message: `${result.count} portfolios deleted successfully`,
  };
};

export const PortfolioServices = {
  createPortfolio,
  getPortfolios,
  updatePortfolio,
  deletePortfolios,
};
