'use client'

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

const Login = () => {
    return (<>
        <h3 className="text-2xl my-4">LogIn Form</h3>
        <div className="flex flex-col gap-3">
            <div>
                <Input className="w-80" type="text" placeholder="Enter email id" />
            </div>
            <div>
                <Input className="w-80" type="password" placeholder="Enter password" />
            </div>
            <div>
                <Button className="w-full" variant={"outline"}>
                    Login
                </Button>
            </div>
        </div>
    </>)
}

export default Login;