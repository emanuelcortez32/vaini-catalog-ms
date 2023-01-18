import { Catalog, ICatalog } from "../model/catalog.model"

export const createCatalog = async (data: ICatalog) => {
    const catalog = new Catalog(data);
    await catalog.save();
    return catalog;
}

export const getCatalogById = async (idCatalog: string) => {
    const catalog = Catalog.findById(idCatalog).orFail(() => { throw new Error('Catalog not found')});
    return catalog;
}

export const getCatalogByOwner = async (ownerId: string) => {
    const catalog = Catalog.find({ownerId}).orFail(() => { throw new Error('Catalog not found')});
    return catalog;
}