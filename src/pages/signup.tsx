import { LayoutTemplate } from "@/layout/layoutTemplate";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";

export default function SignUp() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    return (
        <LayoutTemplate>
            <form action="" className="flex flex-col justify-center items-center gap-2">
                <h2>Create new account</h2>
                <Input
                    isClearable
                    type="text"
                    label="Name"
                    variant="bordered"
                    placeholder="Full name"
                    defaultValue=""
                    onClear={() => console.log("input cleared")}
                    className="max-w-xs"
                />
                <Input
                    isClearable
                    type="text"
                    label="Company name"
                    variant="bordered"
                    placeholder="Company Name"
                    defaultValue=""
                    onClear={() => console.log("input cleared")}
                    className="max-w-xs"
                />
                <Input
                    isClearable
                    type="email"
                    label="Email"
                    variant="bordered"
                    placeholder="Enter your email"
                    defaultValue=""
                    onClear={() => console.log("input cleared")}
                    className="max-w-xs"
                />
                <Input
                    label="Password"
                    variant="bordered"
                    placeholder="Enter your password"
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                            {isVisible ? (
                                <PiEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <PiEyeLight className="text-2xl text-default-400 pointer-events-none" />
                            )}
                        </button>
                    }
                    type={isVisible ? "text" : "password"}
                    className="max-w-xs"
                />
                <Button className="mt-4">Next</Button>
            </form>
        </LayoutTemplate>
    )
}