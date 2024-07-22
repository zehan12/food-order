import axios from "axios";
import { RestaurantType } from "../types/restaurant";

export const createRestaurant = async (
    restaurant: RestaurantType
): Promise<any> => {
    try {
        const response = await axios.post(
            "http://localhost:3000/api/restaurant",
            restaurant
        );
        return response;
    } catch (error) {
        console.error("Error creating restaurant:", error);
        throw error;
    }
};
