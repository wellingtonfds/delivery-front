import { CreateUserType } from '@/type/create-user.type';
import { createBrowserClient } from '@supabase/ssr';


export function createClient() {
    console.log(process.env)
    return createBrowserClient(
        'https://mddysspjdtddobnfsnww.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kZHlzc3BqZHRkZG9ibmZzbnd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyMTIzMjAsImV4cCI6MjA0Mjc4ODMyMH0.Msw2EW9ywssLE2s7wxMv83C7w_GzsilfqrZ1PQfz3IY'
    )
}




export async function signInWithEmail(email: string, password: string) {
    const { data, error } = await createClient().auth.signInWithPassword({
        email,
        password,
    })

    console.log({
        data,
        error
    })
}

export async function signUpWithEmail({ name, email, password, phone }: CreateUserType) {
    const [fist_name, ...last_name] = name.split(' ')
    const payload = {
        email,
        password,
        options: {
            data: {
                fist_name,
                last_name: last_name.join(' '),
                phone
            }
        }
    }
    const { data, error } = await createClient().auth.signUp(payload)

    return { data, error }

}