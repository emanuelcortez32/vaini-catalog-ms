import { Catalog } from "../model/catalog.model";
import { IProduct, Product } from "../model/product.model";


export const addProducts = async (ownerId: string, products: IProduct[]) => {
    const catalog = await Catalog.findOne({ownerId}).orFail(() => { throw new Error('your document not found')});
    const currentProducts = catalog.products || [];
    const auxProducts = [...currentProducts, ...products];
    const productsToAdd = auxProducts.map(product => new Product(product));

    for(let i = 0; i < productsToAdd.length; i++) {
        await productsToAdd[i].validate();
    }

    const updated = await catalog.update({ products: productsToAdd}, { new: true });
    return updated;
}