// import prisma from "../../shared/prisma";
import { ICreatePortfolio } from "./Portfolios.interface";

const createPortofolio = async (payload: ICreatePortfolio) => {
    // const result = await prisma.portfolios.create({
    //     data: {
    //         ...payload,
    //     },
    // });
    // return result;
}

const getPortofolios = async (query: Record<string, any>) => { };

const getPortofolioById = async (id: number) => { };

const updatePortofolio = async (id: number, payload: ICreatePortfolio) => { };

const deletePortofolio = async (id: number) => { };

export const PortofolioService = {
    createPortofolio,
    getPortofolios,
    getPortofolioById,
    updatePortofolio,
    deletePortofolio,
};