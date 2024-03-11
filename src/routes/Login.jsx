import { Button } from "../components/ui/button";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { pb } from "../lib/pb";
import { TextInput } from "../components/ui/TextInput";



export function Login() {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm({
        defaultValues: {
            user: '',
            password: '',
        }
    })

    const onSubmit = async (data) => {
        try {
            const authData = await pb.collection('users').authWithPassword(
                data.user,
                data.password,
            );

            console.log(authData);
            navigate(-1)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    label="Name oder Email"
                    type="text"
                    {...register('user', { required: true })}
                />
                <TextInput
                    label="Passwort"
                    type="password"
                    {...register('password', { required: true })}
                />

                <Button className="w-full" type="submit">Login</Button>
            </form>
        </div>
    )
}