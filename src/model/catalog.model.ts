import { Schema, model, Types } from 'mongoose';
import { IProduct, productSchema } from './product.model';

export interface ICatalog {
    _id: any,
    title: string,
    link?: string,
    description?: string,
    products?: IProduct[]
    ownerId: string
}

const catalogSchema = new Schema<ICatalog>({
    title: { type: String, required: true },
    description: { type: String, required: false, default: "" },
    link: { type: String, required: false, default: "" },
    products: { type: [productSchema], required: false, default: [] },
    ownerId: { type: String, required: true }
})

export const Catalog = model<ICatalog>('catalogs', catalogSchema);