import { Router } from 'express';
import { check } from '../controllers/health.controller';

export const healthRouter = Router();

healthRouter.get('/', check);