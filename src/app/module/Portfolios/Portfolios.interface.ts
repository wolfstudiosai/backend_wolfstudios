export interface ICreatePortfolio {
    project_title: string;
    category?: string;
    video_url?: string;
    hero_image?: string;
    field_image?: string;
    thumbnail?: string;
    vertical_gallery_images: string[];
    horizontal_gallery_images: string[];
    date?: string;
    short_description?: string;
    full_description?: string;
    state?: string;
    partner_hq?: string;
}