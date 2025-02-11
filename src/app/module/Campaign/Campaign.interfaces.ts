import { CampaignStatus } from "@prisma/client";

export interface ICampaign {
    name: string;
    guideline?: string;
    campaign_image?: string;
    content_engagement: number;
    content_hq?: string;
    note?: string;
    stakeholder?: string;
    campaign_status?: CampaignStatus;
    retail_partners?: string;
    proposed_partners?: string;
    live_partners?: string;
    contributed_partners?: string;
    image_gallery: string[];
    video_gallery: string[];
    budget?: number;
    total_expense?: number;
    campaign_ROI?: string;
    start_date?: string;
    end_date?: string;
    description?: string;
    spaces?: string;
    product_expense?: number;
    campaign_group_id: string;
}