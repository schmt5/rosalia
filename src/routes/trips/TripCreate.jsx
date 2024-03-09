import { useForm } from "react-hook-form"
import { Button } from "../../components/ui/button"
import { useNavigate } from "react-router-dom"

export function TripCreate() {
    const navigate = useNavigate()
    const now = new Date()
    const todayValue = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`

    const { register, handleSubmit } = useForm({
        defaultValues: {
            userId: '',
            userName: '',
            from: todayValue,
            km: null,
        }
    })

    const onSubmit = async (data) => {
        console.log(data)

        navigate('/trips')
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('userId')} hidden />
                <div className="bg-neutral-100 has-[:focus-within]:bg-neutral-200 flex flex-col p-4 rounded-md mb-6">
                    <label
                        className="text-sm font-semibold"
                        htmlFor="userName"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        className="bg-inherit outline-none"
                        {...register('userName', { required: true })}
                    />
                </div>


                <div className="bg-neutral-100 has-[:focus-within]:bg-neutral-200 flex flex-col p-4 rounded-md mb-6">
                    <label
                        className="text-sm font-semibold"
                        htmlFor="from"
                    >
                        Datum
                    </label>
                    <input
                        className="bg-inherit outline-none"
                        type="date"
                        {...register('from', { required: true })}
                    />
                </div>


                <div className="bg-neutral-100 has-[:focus-within]:bg-neutral-200 flex flex-col p-4 rounded-md mb-6">
                    <label
                        className="text-sm font-semibold"
                        htmlFor="km"
                    >
                        km
                    </label>
                    <input
                        id="mk"
                        type="number"
                        className="bg-inherit outline-none"
                        {...register('km', { required: true })}
                    />
                </div>

                <Button type="submit" className="w-full mt-8">
                    Speichern
                </Button>
            </form>
        </div>
    )
}