import { ErrorDto } from "@/dtos/error.dto";
import { signUpWithEmail } from "@/supabase/client";
import { CreateUserType } from "@/type/create-user.type";
import { useCallback, useState } from "react";

export function useSingUp() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<ErrorDto | null>(null)
    const [success, setSuccess] = useState(false)
    const handleSingUp = useCallback(async (requestData: CreateUserType) => {
        setLoading(true)
        const { data, error } = await signUpWithEmail(requestData)
        setLoading(false)
        error && setError(new ErrorDto(error.message, error.code))
        data && setSuccess(true)

    }, [])
    return { success, error, loading, handleSingUp }
}