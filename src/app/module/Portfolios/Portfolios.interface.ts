import { EPortfolioType } from "./Portfolios.enum";

export interface ICreatePortfolio {
    type: EPortfolioType;
    name: string;
    model?: string;
    days_location?: string;
    sessions?: string;
    producer?: string;
    production_studio?: string;
    location?: string;
    talent?: string;
    creation_10_images_services_provide?: string;
    brand?: string;
    deliverables?: string;
}