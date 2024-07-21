export interface RestaurantType {
    email: string;
    password: string;
    confirmPassword: string;
    restaurantName: string;
    city: string;
    address: string;
    contactNumber: string;
}

export interface createRestaurantType {
    email: string;
    password: string;
    restaurantName: string;
    city: string;
    address: string;
    contactNumber: string;
}
