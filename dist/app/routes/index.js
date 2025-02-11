"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Auth_routes_1 = require("../module/Auth/Auth.routes");
const Campaign_routes_1 = require("../module/Campaign/Campaign.routes");
const campaign_group_routes_1 = require("../module/CampaignGroup/campaign_group.routes");
const Content_routes_1 = require("../module/ContentHQ/Content.routes");
const File_routes_1 = require("../module/File/File.routes");
const Partner_routes_1 = require("../module/Partner/Partner.routes");
const Portfolios_routes_1 = require("../module/Portfolios/Portfolios.routes");
const Thread_routes_1 = require("../module/Threads/Thread.routes");
const User_routes_1 = require("../module/User/User.routes");
const router = (0, express_1.Router)();
const routes = [
    {
        path: "/auth",
        route: Auth_routes_1.AuthRoutes,
    },
    {
        path: "/user",
        route: User_routes_1.UserRoutes,
    },
    {
        path: "/record",
        route: Content_routes_1.ContentRoutes,
    },
    {
        path: "/campaign",
        route: Campaign_routes_1.CampaignRoutes,
    },
    // {
    //   path: "/old_campaign",
    //   route: OldCampaignRoutes,
    // },
    {
        path: "/campaign-group",
        route: campaign_group_routes_1.CampaignGroupRoutes,
    },
    {
        path: "/partner",
        route: Partner_routes_1.PartnerRoutes,
    },
    {
        path: "/file",
        route: File_routes_1.FileRoutes,
    },
    {
        path: "/portfolio",
        route: Portfolios_routes_1.PortfolioRoutes,
    },
    {
        path: "/threads",
        route: Thread_routes_1.ThreadRoutes,
    },
];
routes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
