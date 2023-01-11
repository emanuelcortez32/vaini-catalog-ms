import { Router } from 'express';
import { createNewCatalog, getCatalog } from '../controllers/catalog.controller';

export const catalogRouter = Router();

catalogRouter.post('/', createNewCatalog);
catalogRouter.get('/', getCatalog);