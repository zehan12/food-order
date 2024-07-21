import { Model, model, models, Schema } from "mongoose";

export interface IRestaurant {
    email: String;
    password: String;
    restaurantName: string;
    city: string;
    address: string;
    contactNumber: string;
}

export interface IRestaurantDocument extends IRestaurant, Document {
    createdAt: Date;
    updatedAt: Date;
}

const restaurantSchema = new Schema<IRestaurantDocument>(
    {
        email: String,
        password: String,
        restaurantName: String,
        city: String,
        address: String,
        contactNumber: String,
    },
    {
        timestamps: true,
    }
);

export const Restaurant: Model<IRestaurantDocument> =
    models?.Restaurant || model("Restaurant", restaurantSchema);
