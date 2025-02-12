import { Prisma } from "@prisma/client";
import httpStatus from "http-status";
import { sortOrderType } from "../../constants/common";
import ApiError from "../../error/ApiError";
import prisma from "../../shared/prisma";
import fieldValidityChecker from "../../utils/fieldValidityChecker";
import pagination from "../../utils/pagination";
import { slugGenerator } from "../../utils/slugGenerator";
import {
    campaignGroupSearchableFields,
    campaignGroupSortableFields,
} from "./campaign_group.constants";
import { ICampaignGroup } from "./campaign_group.interfaces";

const createCampaignGroup = async (data: ICampaignGroup) => {
    const result = await prisma.campaignGroup.create({
        data: {
            ...data,
            slug: slugGenerator(data.name),
        },
    });


    return result;
}

const getCampaignGroups = async (query: Record<string, any>) => {
    const { searchTerm, page, limit, sortBy, sortOrder, id } =
        query;
    if (sortBy) {
        fieldValidityChecker(campaignGroupSortableFields, sortBy);
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

    const andConditions: Prisma.CampaignGroupWhereInput[] = [];

    if (id)
        andConditions.push({
            id: id,
        });

    if (searchTerm) {
        andConditions.push({
            OR: campaignGroupSearchableFields.map((field) => {
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

    const result = await prisma.campaignGroup.findMany({
        where: whereConditons,
        skip,
        take: limitNumber,
        orderBy: {
            [sortWith]: sortSequence,
        },
        include: {
            campaigns: {
                select: {
                    id: true,
                    name: true,
                    slug: true,
                    guideline: true,
                    campaign_image: true,
                    content_engagement: true,
                    content_hq: true,
                    note: true,
                    stakeholder: true,
                    campaign_status: true,
                    retail_partners: true,
                    proposed_partners: true,
                    live_partners: true,
                    contributed_partners: true,
                    image_gallery: true,
                    video_gallery: true,
                    budget: true,
                    total_expense: true,
                    campaign_ROI: true,
                    start_date: true,
                    end_date: true,
                    description: true,
                    spaces: true,
                    product_expense: true,
                    created_at: true,
                    updated_at: true,
                    campaign_progress: true,
                    campaign_group: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            }
        }
    });

    const formattedResult = result.map((group) => ({
        ...group,
        campaigns: group.campaigns.map(({ campaign_group, ...campaign }) => ({
            ...campaign,
            campaign_group_id: campaign_group?.id,
            campaign_group_name: campaign_group?.name,
        })),
    }));

    const total = await prisma.campaignGroup.count({ where: whereConditons });

    return {
        meta: {
            page: pageNumber,
            limit: limitNumber,
            total,
        },
        data: formattedResult,
    };
};

const updateCampaignGroup = async (
    id: string,
    payload: Record<string, any>
) => {
    if (payload?.name) {
        payload.slug = slugGenerator(payload.name);
    }

    const result = await prisma.campaignGroup.update({
        where: {
            id,
        },
        data: {
            ...payload,
        },
        include: {
            campaigns: {
                select: {
                    id: true,
                    name: true,
                    slug: true,
                    guideline: true,
                    campaign_image: true,
                    content_engagement: true,
                    content_hq: true,
                    note: true,
                    stakeholder: true,
                    campaign_status: true,
                    retail_partners: true,
                    proposed_partners: true,
                    live_partners: true,
                    contributed_partners: true,
                    image_gallery: true,
                    video_gallery: true,
                    budget: true,
                    total_expense: true,
                    campaign_ROI: true,
                    start_date: true,
                    end_date: true,
                    description: true,
                    spaces: true,
                    product_expense: true,
                    created_at: true,
                    updated_at: true,
                    campaign_progress: true,
                    campaign_group: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            }
        }
    });

    return result;
};

const deleteCampaignGroups = async ({ ids }: { ids: string[] }) => {
    const campaigns = await prisma.campaignGroup.findMany({
        where: {
            id: {
                in: ids,
            },
        },
    });
    if (!campaigns?.length) {
        throw new ApiError(httpStatus.NOT_FOUND, "Campaign group not found");
    }
    const result = await prisma.campaignGroup.deleteMany({
        where: {
            id: {
                in: ids,
            },
        },
    });
    return {
        deleted_count: result.count,
        message: `${result.count} campaign group deleted successfully`,
    };
};

export const CampaignGroupServices = {
    createCampaignGroup,
    getCampaignGroups,
    updateCampaignGroup,
    deleteCampaignGroups,
};
