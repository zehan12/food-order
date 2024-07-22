"use client";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { resetRestaurantState } from "@/app/redux/restaurant/restaurant.slice";
import { IDLE } from "@/app/constants";

const Header = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const restaurantName = useAppSelector(
        (state) => state.restaurant.restaurantName
    );
    const createRestaurantStatus = useAppSelector(
        (state) => state.restaurant.createRestaurantStatus
    );

    const handleLogout = () => {
        dispatch(resetRestaurantState());
    };

    useEffect(() => {
        if (restaurantName) {
            router.push("/restaurant/dashboard");
        }
    }, []);

    useEffect(() => {
        if (createRestaurantStatus === IDLE) {
            router.push("/restaurant");
        }
    }, [createRestaurantStatus]);

    return (
        <>
            <header className="flex justify-between items-center w-screen px-40">
                <div className="w-28">
                    <img
                        className="w-full h-full"
                        src={
                            "https://webneel.com/daily/sites/default/files/images/daily/06-2013/5-burger-king-tomato-king-logo-parody.jpg"
                        }
                        alt="logo"
                    />
                </div>
                <nav>
                    <ul className="flex justify-evenly items-center gap-6">
                        <li>
                            <Link className="hover:text-blue-600" href="/">
                                Home
                            </Link>
                        </li>
                        {restaurantName ? (
                            <>
                                <li>
                                    <Button
                                        onClick={handleLogout}
                                        variant={"secondary"}
                                        className="hover:text-blue-600"
                                    >
                                        Logout
                                    </Button>
                                </li>
                                <li>
                                    <Link
                                        className="hover:text-blue-600"
                                        href="/profile"
                                    >
                                        Profile
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link
                                    className="hover:text-blue-600"
                                    href="/restaurant"
                                >
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
