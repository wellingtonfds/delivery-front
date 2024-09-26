import { SiGN_UP_MUTATION } from "@/graphql/signup";
import { LayoutTemplate } from "@/layout/layoutTemplate";
import { signUpWithEmail } from "@/supabase/client";
import { useMutation } from "@apollo/client";
import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import { toast } from 'react-toastify';

export interface SignUpFormInput {
    name: string
    email: string
    password: string
    companyName: string
}

export default function SignUp() {
    const [isVisible, setIsVisible] = useState(false);
    const [mutation, { loading, error }] = useMutation(SiGN_UP_MUTATION)
    const toggleVisibility = () => setIsVisible(!isVisible);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SignUpFormInput>()

    const submitHandler: SubmitHandler<SignUpFormInput> = async (data) => {
        console.log(data)

        await signUpWithEmail(data.email, data.password)
        // mutation({
        //     variables: data,
        //     update(cache, result) {
        //         console.log('cache', cache)
        //         console.log('result', result)
        //     },
        //     onQueryUpdated(observableQuery) {
        //         console.log('observableQuery', observableQuery)
        //     },
        //     fetchPolicy: 'network-only',
        //     onError(error, clientOptions) {
        //         console.log('error', error)
        //         console.log('clientOptions', clientOptions)
        //     },

        // })
        console.log('fim')
    }

    useEffect(() => {
        if (error) {
            console.log('error aaaaaaa', error)
            toast.error(error.message)
        }
    }, [error])
    return (
        <LayoutTemplate>
            <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col justify-center items-center gap-2">
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
                    {...register('name', { required: false })}
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
                    {...register('companyName', { required: false })}
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
                <Button className="mt-4" type="submit">Next</Button>
            </form>
        </LayoutTemplate>
    )
}