import { Prisma } from "@prisma/client";
import httpStatus from "http-status";
import { sortOrderType } from "../../constants/common";
import ApiError from "../../error/ApiError";
import { TAuthUser } from "../../interfaces/common";
import prisma from "../../shared/prisma";
import fieldValidityChecker from "../../utils/fieldValidityChecker";
import pagination from "../../utils/pagination";
import { partnerSearchableFields, partnerSortableFields } from "./Partner.constants";
import { IPartner } from "./Partner.interfaces";

const addPartner = async (user: TAuthUser, data: IPartner) => {
    const result = await prisma.partner.create({
        data: {
            ...data,
            user_id: user.id
        }
    })

    return result;
}

const getPartners = async (query: Record<string, any>) => {
    const { searchTerm, page, limit, sortBy, sortOrder, id } =
        query;

    if (sortBy) {
        fieldValidityChecker(partnerSortableFields, sortBy);
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

    const andConditions: Prisma.PartnerWhereInput[] = [];

    if (id)
        andConditions.push({
            id: id,
        });

    if (searchTerm) {
        andConditions.push({
            OR: partnerSearchableFields.map((field) => {
                return {
                    [field]: {
                        contains: searchTerm,
                        mode: "insensitive",
                    },
                };
            }),
        });
    }

    const whereConditons = {
        AND: andConditions,
    };

    const result = await prisma.partner.findMany({
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
                    last_name: true
                }
            }
        }
    });

    const total = await prisma.partner.count({ where: whereConditons });

    return {
        meta: {
            page: pageNumber,
            limit: limitNumber,
            total,
        },
        data: result,
    };
};

const updatePartner = async (id: string, payload: Record<string, any>) => {
    const result = await prisma.partner.update({
        where: {
            id
        },
        data: {
            ...payload
        }
    });

    return result
}

const deletePartners = async ({ ids }: { ids: string[] }) => {
    const partners = await prisma.partner.findMany({
        where: {
            id: {
                in: ids
            }
        }
    })
    if (!partners?.length) {
        throw new ApiError(httpStatus.NOT_FOUND, "Partner not found")
    }
    const result = await prisma.partner.deleteMany({
        where: {
            id: {
                in: ids
            }
        }
    });
    return {
        deleted_count: result.count,
        message: `${result.count} partner deleted successfully`
    }
}

export const PartnerServices = {
    addPartner,
    getPartners,
    updatePartner,
    deletePartners
}