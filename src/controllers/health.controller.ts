import { RequestHandler } from "express";
import { checkHealth } from "../services/health.service";

export const check: RequestHandler = (req, res, next) => {
    return res.status(200).json(checkHealth());    
}