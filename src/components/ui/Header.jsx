import { pb } from "@/lib/pb"
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@/components/ui/Link";

export function Header() {
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.model);

    return (
        <header className='flex justify-between items-baseline font-semibold text-xl mt-2 mb-8'>
            <h1>Rosalia</h1>
            {pb.authStore.isValid ? (
                <RouterLink
                    to={'/logout'}
                    className='grid place-content-center h-10 w-10 bg-slate-100 rounded-full text-base font-semibold uppercase'>
                    {pb.authStore.model.username.charAt(0)}
                </RouterLink>
            ) : (
                <Link to={'/login'}>Login</Link>
            )}
        </header>
    )
}
