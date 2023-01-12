import { NextFunction, Request, RequestHandler, Response } from "express";
import { expressjwt as jwt } from "express-jwt";
import { unless } from "express-unless";
import { TOKEN_SECRET } from "../config";
import { Module } from "../model/module.model";

export const tokenAuthentication = () =>
  jwt({
    secret: TOKEN_SECRET,
    algorithms: ["HS256"],
  }).unless({
    path: ["/health"],
  });

export const limitByRoles = () => {
  let limitMiddleware: any = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const module = await Module.findOne({ name: "catalog-module" });

      const allowedRoles = module?.config.auth.roles || [];

      const allow = allowedRoles.every((authority) =>
        req.auth.authorities.includes(authority)
      );

      allow ? next() : res.status(403).send("TOMATELAA");
    } catch (err) {
      next(err);
    }
  };

  limitMiddleware.unless = unless({ path: ["/health"] });

  return limitMiddleware;
};
