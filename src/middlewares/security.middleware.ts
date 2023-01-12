import { NextFunction, Request, Response } from "express";
import { expressjwt as jwt } from "express-jwt";
import { unless } from "express-unless";
import { TOKEN_SECRET } from "../config";
import { ForbiddenError, NotAuthorizedError } from "../errors";
import { Module } from "../model/module.model";

const unlessOptions = {
  path: ["/health"],
}

let limitMiddleware: any = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if(!req.auth || !req.auth.authorities) throw new NotAuthorizedError("You are not authorized");

    const module = await Module.findOne({ name: "catalog-module" });

    const allowedRoles = module?.config.auth.roles || [];

    const allow = allowedRoles.every((authority) =>
      req.auth.authorities.includes(authority)
    );

    if(allow) {
      next();
    } else {
      throw new ForbiddenError("You do not have permission to use the catalog");
    }
  } catch (err) {
    next(err);
  }
};

limitMiddleware.unless = unless;

export const tokenAuthentication = () =>
  jwt({
    secret: TOKEN_SECRET,
    algorithms: ["HS256"],
  }).unless(unlessOptions);

export const limitByRoles = () => limitMiddleware.unless(unlessOptions);
