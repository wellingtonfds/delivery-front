import { CreateUserType } from "@/type/create-user.type";
import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import { toast } from "react-toastify";
import { useSingUp } from "./signup.hook";

export function SignUpForm() {
    const [isVisible, setIsVisible] = useState(false)
    const [step, setStep] = useState(0)

    const { error, loading, success, handleSingUp } = useSingUp()
    const toggleVisibility = () => setIsVisible(!isVisible);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<CreateUserType>()

    useEffect(() => {
        error && toast.error(error.message)
        success && toast.success('Account created successfully') && setStep(1)
    }, [error, success])

    return (
        <form onSubmit={handleSubmit(handleSingUp)} className="flex flex-col justify-center items-center gap-2">
            <Input
                isClearable
                type="text"
                label="Name"
                variant="bordered"
                placeholder="Full name"
                defaultValue=""
                onClear={() => console.log("input cleared")}
                className="max-w-xs"
                {...register('name', { required: false })}
            />
            <Input
                isClearable
                type="text"
                label="Phone number"
                variant="bordered"
                placeholder="(31) 99301-2467"
                defaultValue=""
                onClear={() => console.log("input cleared")}
                className="max-w-xs"
                {...register('phone', { required: false })}
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
                {...register('email', { required: true })}
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
                {...register('password', { required: true })}
            />

            <Button className="mt-4" type="submit">Login</Button>
        </form>
    )
}