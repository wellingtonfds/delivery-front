import { Button, Input } from "@nextui-org/react"
import { useForm } from "react-hook-form"
import { CountDown } from "../countdown"

export function SingUpValidation() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<{ tokenValidation: string }>()
    return (
        <form onSubmit={handleSubmit(() => console.log('oi'))} className="flex flex-col justify-center items-center gap-2">
            <Input
                isClearable
                type="text"
                label="Name"
                variant="bordered"
                placeholder="Full name"
                defaultValue=""
                onClear={() => console.log("input cleared")}
                className="max-w-xs"
                {...register('tokenValidation', { required: true })}
            />
            <span> Solicitar um novo token em <CountDown start={30} /> segundos </span>
            <Button className="mt-4" type="submit">Validation</Button>
        </form>
    )
}