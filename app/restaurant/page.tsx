'use client'

import { useState } from "react"
import Login from "../components/restaurant/Login";
import Signup from "../components/restaurant/Signup";
import { Button } from "@/components/ui/button";

const Restaurant = () => {
    const [login, setLogin] = useState<boolean>(false);

    return (<>
        <div className="w-full flex flex-col justify-center items-center">

            <h1 className="text-3xl font-medium">Restaurant</h1>
            {
                login ? <Login /> : <Signup />
            }
            <div>
                <p
                    className="w-fit text-sm p-2 cursor-pointer text-blue-500 hover:text-blue-700"
                    onClick={() => setLogin(!login)}
                >
                    {
                        login ?
                            "Do not have account? Sign Up"
                            :
                            "Already have account? Login"
                    }
                </p>
            </div>
        </div>
    </>)
}

export default Restaurant