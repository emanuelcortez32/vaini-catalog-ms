import { NotFoundError } from "../errors";
import { Catalog } from "../model/catalog.model";
import { IProduct, Product } from "../model/product.model";


export const addProducts = async (ownerId: string, catalogId: string, products: IProduct[]) => {
    const catalog = await Catalog.findOne({ownerId, _id: catalogId}).orFail(() => { throw new NotFoundError('Catalog Not Found')});
    const currentProducts = catalog.products || [];
    const auxProducts = [...currentProducts, ...products];
    const productsToAdd = auxProducts.map(product => new Product(product));

    for(let i = 0; i < productsToAdd.length; i++) {
        await productsToAdd[i].validate();
    }

    const updated = await catalog.update({ products: productsToAdd}, { new: true });
    return updated;
}