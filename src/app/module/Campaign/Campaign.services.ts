import { Prisma } from "@prisma/client";
import { sortOrderType } from "../../constants/common";
import { TAuthUser } from "../../interfaces/common";
import prisma from "../../shared/prisma";
import fieldValidityChecker from "../../utils/fieldValidityChecker";
import pagination from "../../utils/pagination";
import { slugGenerator } from "../../utils/slugGenerator";
import { campaignSearchableFields, campaignSortableFields } from "./Campaign.constants";
import { TCreateCampaignPayload } from "./Campaign.interfaces";

const createCampaign = async (user: TAuthUser, payload: TCreateCampaignPayload) => {
    const { start_date, end_date, ...rest } = payload;

    let startDate = null;
    let endDate = null;
    if (start_date) {
        startDate = new Date(start_date)
    }
    if (end_date) {
        endDate = new Date(end_date)
    }

    const result = await prisma.campaign.create({
        data: {
            ...rest,
            start_date: startDate,
            end_date: endDate,
            user_id: user.id,
            slug: slugGenerator(payload.name),
        }
    })
    return result
}

const getCampaigns = async (query: Record<string, any>) => {
    const { searchTerm, page, limit, sortBy, sortOrder, id, ...remainingQuery } =
        query;
    if (sortBy) {
        fieldValidityChecker(campaignSortableFields, sortBy);
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

    const andConditions: Prisma.CampaignWhereInput[] = [];

    if (id)
        andConditions.push({
            id: id,
        });

    if (searchTerm) {
        andConditions.push({
            OR: campaignSearchableFields.map((field) => {
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

    const result = await prisma.campaign.findMany({
        where: whereConditons,
        skip,
        take: limitNumber,
        orderBy: {
            [sortWith]: sortSequence,
        },
    });

    const total = await prisma.campaign.count({ where: whereConditons });

    return {
        meta: {
            page: pageNumber,
            limit: limitNumber,
            total,
        },
        data: result,
    };
};

export const CampaignServices = {
    createCampaign,
    getCampaigns
}