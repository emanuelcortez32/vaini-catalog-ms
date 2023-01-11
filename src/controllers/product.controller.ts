import { RequestHandler } from "express";
import { addProducts } from "../services/product.service";

export const createNewProduct: RequestHandler = async (req, res, next) => {
  try {
    const { body } = req;
    const catalogUpdated = await addProducts(req.auth.id, body);
    return res.status(200).json({ data: catalogUpdated });
  } catch (err) {
    next(err);
  }
};
