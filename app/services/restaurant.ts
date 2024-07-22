import axios from "axios";
import { createRestaurantType } from "../types/restaurant";

// Update the function to return the correct type
export const createRestaurant = async (
    restaurant: createRestaurantType
): Promise<any> => {
    try {
        const response = await axios.post(
            "http://localhost:3000/api/restaurant",
            restaurant
        );
        return response; // Return the full AxiosResponse
    } catch (error) {
        console.error("Error creating restaurant:", error);
        throw error; // Rethrow or handle the error as needed
    }
};
