import { ErrorRequestHandler } from "express";
import {
    createErrorResponseBadRequest,
  createErrorResponseConflict,
  createErrorResponseForbidden,
  createErrorResponseGeneric,
  createErrorResponseNotFound,
  createErrorResponseUnAuthorized,
} from "../helpers/creatorResponse";

export const errorHandler =
  (): ErrorRequestHandler => (err, req, res, next) => {
    console.log(err.name);
    switch (err.name) {
      case "NotFoundError":
        return res.status(404).json(createErrorResponseNotFound(err));
      case "UnauthorizedError":
      case "NotAuthorizedError":
        return res.status(401).json(createErrorResponseUnAuthorized(err));
      case "BadRequestError":
        return res.status(400).json(createErrorResponseBadRequest(err));
      case "ForbiddenError":
        return res.status(403).json(createErrorResponseForbidden(err));
      case "ConflictError":
        return res.status(409).json(createErrorResponseConflict(err));
      default:
        return res.status(500).json(createErrorResponseGeneric(err));
    }
  };
