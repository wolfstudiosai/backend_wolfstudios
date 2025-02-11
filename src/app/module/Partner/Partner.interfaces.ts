import { CurrentStatus, ProfileCategory } from "@prisma/client";

export interface IPartner {
    name: string;
    email?: string;
    phone?: string;
    profile_image?: string;
    website?: string;
    state?: string;
    tags: string[];
    instagram?: string;
    instagram_following: number;
    tiktok?: string;
    tiktok_following?: number;
    youtube?: string;
    youtube_following?: number;
    x?: string;
    x_following?: number;
    facebook?: string;
    facebook_following?: number;
    pinterest?: string;
    pinterest_following?: number;
    partner_IG_rate?: number;
    partner_TT_rate?: number;
    partner_YT_rate?: number;
    partner_UGC_rate?: number;
    partner_360_rate?: number;
    contract?: string;
    products?: string;
    contributed_campaigns?: string;
    profile_category?: ProfileCategory;
    current_status?: CurrentStatus;
    profile_status?: string;
    stakeholder?: string;
    total_audience?: number;
    sourced_from?: string;
}