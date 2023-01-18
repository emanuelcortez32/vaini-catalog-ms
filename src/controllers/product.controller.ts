import { RequestHandler } from "express";
import { createResponseCreatorOk } from "../helpers/creatorResponse";
import { addProducts } from "../services/product.service";

export const createNewProduct: RequestHandler = async (req, res, next) => {
  try {
    const products = req.body;
    const { catalog: catalogId } = req.query;
    const catalogUpdated = await addProducts(req.auth.id, catalogId as string, products);
    return res.status(201).json(createResponseCreatorOk(catalogUpdated));
  } catch (err) {
    next(err);
  }
};
