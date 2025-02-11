import { Router } from "express";
import { AuthRoutes } from "../module/Auth/Auth.routes";
import { CampaignRoutes } from "../module/Campaign/Campaign.routes";
import { CampaignGroupRoutes } from "../module/CampaignGroup/campaign_group.routes";
import { ContentRoutes } from "../module/ContentHQ/Content.routes";
import { FileRoutes } from "../module/File/File.routes";
import { PartnerRoutes } from "../module/Partner/Partner.routes";
import { PortfolioRoutes } from "../module/Portfolios/Portfolios.routes";
import { ThreadRoutes } from "../module/Threads/Thread.routes";
import { UserRoutes } from "../module/User/User.routes";
const router = Router();

const routes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/record",
    route: ContentRoutes,
  },
  {
    path: "/campaign",
    route: CampaignRoutes,
  },
  // {
  //   path: "/old_campaign",
  //   route: OldCampaignRoutes,
  // },
  {
    path: "/campaign-group",
    route: CampaignGroupRoutes,
  },
  {
    path: "/partner",
    route: PartnerRoutes,
  },
  {
    path: "/file",
    route: FileRoutes,
  },
  {
    path: "/portfolio",
    route: PortfolioRoutes,
  },
  {
    path: "/threads",
    route: ThreadRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
