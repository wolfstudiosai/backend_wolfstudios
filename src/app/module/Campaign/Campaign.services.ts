import { TAuthUser } from "../../interfaces/common";
import prisma from "../../shared/prisma";
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
            user_id: user.id
        }
    })
    return result
}

export const CampaignServices = {
    createCampaign
}