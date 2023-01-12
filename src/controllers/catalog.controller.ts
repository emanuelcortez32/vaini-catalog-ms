import { RequestHandler } from "express";
import { createResponseCreatorOk, createResponseOk } from "../helpers/creatorResponse";
import { ICatalog } from "../model/catalog.model";
import { createCatalog, getCatalogByOwner } from "../services/catalog.service";

export const createNewCatalog: RequestHandler = async (req, res, next) => {
    const { body, auth } = req;
    const dataCatalog: ICatalog = body;
    dataCatalog.ownerId = auth.id;
    try {
        const catalog = await createCatalog(dataCatalog);   
        return res.status(201).json(createResponseCreatorOk(catalog));
    } catch(err) {
       next(err);
    }
}

export const getCatalog: RequestHandler = async (req, res, next) => {
    try {
        const catalog = await getCatalogByOwner(req.auth.id);
        return res.status(200).json(createResponseOk(catalog))
    } catch(err) {
        next(err);
    }
}