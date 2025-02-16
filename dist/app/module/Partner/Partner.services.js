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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnerServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const common_1 = require("../../constants/common");
const ApiError_1 = __importDefault(require("../../error/ApiError"));
const prisma_1 = __importDefault(require("../../shared/prisma"));
const fieldValidityChecker_1 = __importDefault(require("../../utils/fieldValidityChecker"));
const pagination_1 = __importDefault(require("../../utils/pagination"));
const Partner_constants_1 = require("./Partner.constants");
const addPartner = (user, data) => __awaiter(void 0, void 0, void 0, function* () {
    let campaign_month = null;
    if (data.campaign_month) {
        campaign_month = new Date(data.campaign_month);
    }
    let month_sourced = null;
    if (data.campaign_month) {
        month_sourced = new Date(data.campaign_month);
    }
    let second_payment_date = null;
    if (data.campaign_month) {
        second_payment_date = new Date(data.campaign_month);
    }
    const result = yield prisma_1.default.partner.create({
        data: Object.assign(Object.assign({}, data), { campaign_month,
            month_sourced,
            second_payment_date, user_id: user.id })
    });
    return result;
});
const getPartners = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm, page, limit, sortBy, sortOrder, id } = query;
    if (sortBy) {
        (0, fieldValidityChecker_1.default)(Partner_constants_1.partnerSortableFields, sortBy);
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
            OR: Partner_constants_1.partnerSearchableFields.map((field) => {
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
    const result = yield prisma_1.default.partner.findMany({
        where: whereConditons,
        skip,
        take: limitNumber,
        orderBy: {
            [sortWith]: sortSequence,
        },
        include: {
            created_by: {
                select: {
                    first_name: true,
                    last_name: true
                }
            }
        }
    });
    const total = yield prisma_1.default.partner.count({ where: whereConditons });
    return {
        meta: {
            page: pageNumber,
            limit: limitNumber,
            total,
        },
        data: result,
    };
});
const updatePartner = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (payload.campaign_month) {
        payload.campaign_month = new Date(payload.campaign_month);
    }
    if (payload.campaign_month) {
        payload.month_sourced = new Date(payload.campaign_month);
    }
    if (payload.campaign_month) {
        payload.second_payment_date = new Date(payload.campaign_month);
    }
    const result = yield prisma_1.default.partner.update({
        where: {
            id
        },
        data: Object.assign({}, payload)
    });
    return result;
});
const deletePartners = (_a) => __awaiter(void 0, [_a], void 0, function* ({ ids }) {
    const partners = yield prisma_1.default.partner.findMany({
        where: {
            id: {
                in: ids
            }
        }
    });
    if (!(partners === null || partners === void 0 ? void 0 : partners.length)) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Partner not found");
    }
    const result = yield prisma_1.default.partner.deleteMany({
        where: {
            id: {
                in: ids
            }
        }
    });
    return {
        deleted_count: result.count,
        message: `${result.count} partner deleted successfully`
    };
});
exports.PartnerServices = {
    addPartner,
    getPartners,
    updatePartner,
    deletePartners
};
