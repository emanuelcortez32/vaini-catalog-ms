import { Router } from "express";
import { createNewProduct } from "../controllers/product.controller";

export const productRouter = Router();

productRouter.post('/', createNewProduct);