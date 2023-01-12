import { RequestHandler } from "express";
import { createResponseCreatorOk } from "../helpers/creatorResponse";
import { addProducts } from "../services/product.service";

export const createNewProduct: RequestHandler = async (req, res, next) => {
  try {
    const { body } = req;
    const catalogUpdated = await addProducts(req.auth.id, body);
    return res.status(201).json(createResponseCreatorOk(catalogUpdated));
  } catch (err) {
    next(err);
  }
};
