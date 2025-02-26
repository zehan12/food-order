"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RestaurantType } from "@/types/restaurant";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { FULFILLED } from "@/constants";
import { createRestaurantRequest } from "@/redux/restaurant/restaurant.slice";
import { useRouter } from "next/navigation";

const Signup = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const createRestaurantStatus = useAppSelector(
        (state) => state.restaurant.createRestaurantStatus
    );
    const [formData, setFormData] = useState<RestaurantType>({
        email: "",
        password: "",
        confirmPassword: "",
        restaurantName: "",
        city: "",
        address: "",
        contactNumber: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        dispatch(createRestaurantRequest(formData));
    };

    useEffect(() => {
        if (createRestaurantStatus === FULFILLED) {
            toast.success("Restaurant created successfully.");
            router.push("/restaurant/dashboard");
        }
    }, [createRestaurantStatus]);

    return (
        <>
            <h3 className="text-2xl my-4">SignUp Form</h3>
            <div className="flex flex-col gap-3">
                <div>
                    <Input
                        className="w-80"
                        type="text"
                        name="email"
                        placeholder="Enter email id"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Input
                        className="w-80"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Input
                        className="w-80"
                        type="password"
                        name="confirmPassword"
                        placeholder="Enter confirm password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Input
                        className="w-80"
                        type="text"
                        name="restaurantName"
                        placeholder="Enter restaurant name"
                        value={formData.restaurantName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Input
                        className="w-80"
                        type="text"
                        name="city"
                        placeholder="Enter city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Input
                        className="w-80"
                        type="text"
                        name="address"
                        placeholder="Enter full address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Input
                        className="w-80"
                        type="number"
                        name="contactNumber"
                        placeholder="Enter contact number"
                        value={formData.contactNumber}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Button
                        onClick={handleSubmit}
                        className="w-full"
                        variant={"outline"}
                    >
                        Register
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Signup;
