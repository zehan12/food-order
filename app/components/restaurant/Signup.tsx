'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Signup = () => {
    return (<>
        <h3 className="text-2xl my-4">SignUp Form</h3>
        <div className="flex flex-col gap-3">
            <div>
                <Input className="w-80" type="text" placeholder="Enter email id" />
            </div>
            <div>
                <Input className="w-80" type="password" placeholder="Enter password" />
            </div>
            <div>
                <Input className="w-80" type="text" placeholder="Enter restaurant name" />
            </div>
            <div>
                <Input className="w-80" type="text" placeholder="Enter city" />
            </div>
            <div>
                <Input className="w-80" type="text" placeholder="Enter full address" />
            </div>
            <div>
                <Input className="w-80" type="number" placeholder="Enter contact number" />
            </div>
            <div>
                <Button className="w-full" variant={"outline"}>
                    Register
                </Button>
            </div>
        </div>

    </>)
}

export default Signup;