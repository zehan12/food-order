import axios from "axios";
import { createRestaurantType } from "../types/restaurant";

export const createRestaurant = (restaurant: createRestaurantType): any => {
    const response = axios.post(
        "http://localhost:3000/api/restaurant",
        restaurant
    );
    return response;
};
