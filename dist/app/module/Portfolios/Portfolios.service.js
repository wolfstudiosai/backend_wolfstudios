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
exports.PortfolioServices = void 0;
const common_1 = require("../../constants/common");
const ApiError_1 = __importDefault(require("../../error/ApiError"));
const prisma_1 = __importDefault(require("../../shared/prisma"));
const fieldValidityChecker_1 = __importDefault(require("../../utils/fieldValidityChecker"));
const pagination_1 = __importDefault(require("../../utils/pagination"));
const slugGenerator_1 = require("../../utils/slugGenerator");
const Portfolios_constant_1 = require("./Portfolios.constant");
const createPortfolio = (user, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (data === null || data === void 0 ? void 0 : data.date) {
        data.date = new Date(data.date);
    }
    const result = yield prisma_1.default.portfolio.create({
        data: Object.assign(Object.assign({}, data), { slug: (0, slugGenerator_1.slugGenerator)(data.project_title), user_id: user.id })
    });
    return result;
});
const getPortfolios = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm, page, limit, sortBy, sortOrder, id, slug } = query, remainingQuery = __rest(query, ["searchTerm", "page", "limit", "sortBy", "sortOrder", "id", "slug"]);
    if (sortBy) {
        (0, fieldValidityChecker_1.default)(Portfolios_constant_1.portfolioSortableFields, sortBy);
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
    if (slug)
        andConditions.push({
            slug,
        });
    if (searchTerm) {
        andConditions.push({
            OR: Portfolios_constant_1.portfolioSearchableFields.map((field) => {
                return {
                    [field]: {
                        contains: searchTerm,
                        mode: "insensitive",
                    },
                };
            }),
        });
    }
    if (Object.keys(remainingQuery).length) {
        Object.keys(remainingQuery).forEach((key) => {
            andConditions.push({
                [key]: remainingQuery[key],
            });
        });
    }
    const whereConditons = {
        AND: andConditions,
    };
    const result = yield prisma_1.default.portfolio.findMany({
        where: whereConditons,
        skip,
        take: limitNumber,
        orderBy: {
            [sortWith]: sortSequence,
        },
    });
    const total = yield prisma_1.default.portfolio.count({ where: whereConditons });
    return {
        meta: {
            page: pageNumber,
            limit: limitNumber,
            total,
        },
        data: result,
    };
});
const updatePortfolio = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (payload === null || payload === void 0 ? void 0 : payload.project_title) {
        payload.slug = (0, slugGenerator_1.slugGenerator)(payload.project_title);
    }
    const result = yield prisma_1.default.portfolio.update({
        where: {
            id: id,
        },
        data: payload,
    });
    return result;
});
const deletePortfolios = (_a) => __awaiter(void 0, [_a], void 0, function* ({ ids }) {
    const portfolios = yield prisma_1.default.portfolio.findMany({
        where: {
            id: {
                in: ids
            }
        }
    });
    if (!(portfolios === null || portfolios === void 0 ? void 0 : portfolios.length)) {
        throw new ApiError_1.default(httpStatus.NOT_FOUND, "No portfolio found to delete");
    }
    const result = yield prisma_1.default.portfolio.deleteMany({
        where: {
            id: {
                in: ids
            }
        }
    });
    return {
        deleted_count: result.count,
        message: `${result.count} portfolios deleted successfully`
    };
});
exports.PortfolioServices = {
    createPortfolio,
    getPortfolios,
    updatePortfolio,
    deletePortfolios
};
