import { Model, model, models, Schema } from "mongoose";

export interface IRestaurant {
    name: string;
}

export interface IRestaurantDocument extends IRestaurant, Document {
    createdAt: Date;
    updatedAt: Date;
}

const restaurantSchema = new Schema<IRestaurantDocument>(
    {
        name: String,
    },
    {
        timestamps: true,
    }
);

export const Restaurant: Model<IRestaurantDocument> =
    models?.Restaurant || model("Restaurant", restaurantSchema);
