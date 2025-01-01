import { NextFunction, Request, Response } from "express";
import ApiError from "../error/ApiError";
import httpStatus from "http-status";
import { verifyToken } from "../utils/jwtHelpers";
import config from "../config";
import prisma from "../shared/prisma";
import { UserStatus } from "@prisma/client";
import { TAuthUser } from "../interfaces/common";

const auth = (...roles: string[]) => {
  return async (
    req: Request & { user?: TAuthUser },
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized");
      }

      const verifiedUser = verifyToken(token, config.jwt_access_secret);

      const user = await prisma.user.findUniqueOrThrow({
        where: {
          id: verifiedUser.id,
          is_deleted: false,
          status: UserStatus.ACTIVE,
        },
      });

      const passwordChangedTime = Math.floor(
        new Date(user.password_changed_at).getTime() / 1000
      );

      if (passwordChangedTime < verifiedUser.password_changed_at) {
        throw new ApiError(
          httpStatus.UNAUTHORIZED,
          "Password changed recently"
        );
      }

      if (roles?.length && !roles.includes(verifiedUser?.role)) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized");
      }

      req.user = verifiedUser;

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default auth;
