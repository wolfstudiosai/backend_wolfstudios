import { PortfolioTypes, Prisma } from "@prisma/client";
import { TAuthUser } from "../../interfaces/common";
import prisma from "../../shared/prisma";
import { slugGenerator } from "../../utils/slugGenerator";
import { ICreatePortfolio } from "./Portfolios.interface";
import ApiError from "../../error/ApiError";
import fieldValidityChecker from "../../utils/fieldValidityChecker";
import { portfolioSearchableFields, portfolioSortableFields } from "./Portfolios.constant";
import { sortOrderType } from "../../constants/common";
import pagination from "../../utils/pagination";
import httpStatus from "http-status";

const createPortofolio = async (user: TAuthUser, payload: ICreatePortfolio) => {
    const result = await prisma.portfolio.create({
        data: {
            ...payload,
            status: payload.status || 'PENDING',
            type: payload.type as PortfolioTypes || 'VLOGS',
            user_id: user.id,
            slug: slugGenerator(payload.name),
        },
    });
    return result;
}

const getPortofolios = async (query: Record<string, any>) => {
    const { searchTerm, page, limit, sortBy, sortOrder, id, status, ...remainingQuery } =
        query;
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

    if (status && status !== 'PENDING') {
        andConditions.push({
            status: status,
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
        include: {
            created_by: {
                select: {
                    first_name: true,
                    last_name: true,
                    email: true,
                    contact_number: true,
                    profile_pic: true,
                    role: true
                }
            }
        }
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

const getPortofolioById = async (id: string) => {
    const result = await prisma.portfolio.findUnique({
        where: {
            id: id
        },
        include: {
            created_by: {
                select: {
                    first_name: true,
                    last_name: true,
                    email: true,
                    contact_number: true,
                    profile_pic: true,
                    role: true
                }
            }
        }
    });

    if (!result) {
        throw new ApiError(httpStatus.NOT_FOUND, "Portfolio not found");
    }

    return result;
};

const updatePortofolio = async (id: string, payload: Record<string, any>) => {
    if (payload?.name) {
        payload.slug = slugGenerator(payload.name)
    }
    const result = await prisma.portfolio.update({
        where: {
            id
        },
        data: {
            ...payload
        }
    });

    return result
};

const deletePortofolio = async ({ ids }: { ids: string[] }) => {

    if (!Array.isArray(ids) || ids.length === 0) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Please provide an array of portfolio IDs.");
    }

    const portfolios = await prisma.portfolio.findMany({
        where: {
            id: {
                in: ids
            }
        }
    })
    if (!portfolios?.length) {
        throw new ApiError(httpStatus.NOT_FOUND, "portfolio not found")
    }
    const result = await prisma.portfolio.deleteMany({
        where: {
            id: {
                in: ids
            }
        }
    });
    return {
        deleted_count: result.count,
        message: `${result.count} portfolio deleted successfully`
    }
};

export const PortofolioService = {
    createPortofolio,
    getPortofolios,
    getPortofolioById,
    updatePortofolio,
    deletePortofolio,
};