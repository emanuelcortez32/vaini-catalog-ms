import { Schema, model } from 'mongoose';

export type IProduct =  {
    title: string,
    description?: string,
    link?: string,
    image_link?: string,
    brand?: string,
    condition?: string,
    availability?: string,
    price: string,
    google_product_category: string
}

export const productSchema = new Schema<IProduct>({
    title: { type: String, required: true },
    description: { type: String, required: false, default: "" },
    link: { type: String, required: false, default: "" },
    image_link: { type: String, required: false, default: "" },
    brand: { type: String, required: false, default: "" },
    condition: { type: String, required: true, default: "Nuevo" },
    availability: { type: String, required: true, default: "En Stock" },
    price: { type: String, required: true },
    google_product_category: { type: String, required: true }
})

export const Product = model<IProduct>('products', productSchema);

