import { Router } from "express";
import { AuthRoutes } from "../module/Auth/Auth.routes";
import { CampaignRoutes } from "../module/Campaign/Campaign.routes";
import { FileRoutes } from "../module/File/File.routes";
import { RecordsRoutes } from "../module/Records/Records.routes";
import { UserRoutes } from "../module/User/User.routes";
import { PortfolioRoutes } from "../module/Portfolios/Portfolios.route";
import { ThreadRoutes } from "../module/Threads/Thread.routes";
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
    route: RecordsRoutes,
  },
  {
    path: "/campaign",
    route: CampaignRoutes,
  },
  {
    path: "/file",
    route: FileRoutes,
  },
  {
    path: "/portfolios",
    route: PortfolioRoutes,
  },
  {
    path:"/threads",
    route: ThreadRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
