"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignGroupServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const common_1 = require("../../constants/common");
const ApiError_1 = __importDefault(require("../../error/ApiError"));
const prisma_1 = __importDefault(require("../../shared/prisma"));
const fieldValidityChecker_1 = __importDefault(require("../../utils/fieldValidityChecker"));
const pagination_1 = __importDefault(require("../../utils/pagination"));
const slugGenerator_1 = require("../../utils/slugGenerator");
const campaign_group_constants_1 = require("./campaign_group.constants");
const createCampaignGroup = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.campaignGroup.create({
        data: Object.assign(Object.assign({}, data), { slug: (0, slugGenerator_1.slugGenerator)(data.name) }),
    });
    return result;
});
const getCampaignGroups = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm, page, limit, sortBy, sortOrder, id } = query;
    if (sortBy) {
        (0, fieldValidityChecker_1.default)(campaign_group_constants_1.campaignGroupSortableFields, sortBy);
    }
    if (sortOrder) {
        (0, fieldValidityChecker_1.default)(common_1.sortOrderType, sortOrder);
    }
    const { pageNumber, limitNumber, skip, sortWith, sortSequence } = (0, pagination_1.default)({
        page,
        limit,
        sortBy,
        sortOrder,
    });
    const andConditions = [];
    if (id)
        andConditions.push({
            id: id,
        });
    if (searchTerm) {
        andConditions.push({
            OR: campaign_group_constants_1.campaignGroupSearchableFields.map((field) => {
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
    const result = yield prisma_1.default.campaignGroup.findMany({
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
                    campaign_group: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
            },
        },
    });
    const formattedResult = result.map((group) => (Object.assign(Object.assign({}, group), { campaigns: group.campaigns.map((_a) => {
            var { campaign_group } = _a, campaign = __rest(_a, ["campaign_group"]);
            return (Object.assign(Object.assign({}, campaign), { campaign_group_id: campaign_group === null || campaign_group === void 0 ? void 0 : campaign_group.id, campaign_group_name: campaign_group === null || campaign_group === void 0 ? void 0 : campaign_group.name }));
        }) })));
    const total = yield prisma_1.default.campaignGroup.count({ where: whereConditons });
    return {
        meta: {
            page: pageNumber,
            limit: limitNumber,
            total,
        },
        data: formattedResult,
    };
});
const updateCampaignGroup = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (payload === null || payload === void 0 ? void 0 : payload.name) {
        payload.slug = (0, slugGenerator_1.slugGenerator)(payload.name);
    }
    const result = yield prisma_1.default.campaignGroup.update({
        where: {
            id,
        },
        data: Object.assign({}, payload),
    });
    return result;
});
const deleteCampaignGroups = (_a) => __awaiter(void 0, [_a], void 0, function* ({ ids }) {
    const campaigns = yield prisma_1.default.campaignGroup.findMany({
        where: {
            id: {
                in: ids,
            },
        },
    });
    if (!(campaigns === null || campaigns === void 0 ? void 0 : campaigns.length)) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Campaign group not found");
    }
    const result = yield prisma_1.default.campaignGroup.deleteMany({
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
});
exports.CampaignGroupServices = {
    createCampaignGroup,
    getCampaignGroups,
    updateCampaignGroup,
    deleteCampaignGroups,
};
