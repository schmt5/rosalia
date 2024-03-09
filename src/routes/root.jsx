import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { Calendar, Car, Fuel, MapPin } from 'lucide-react'
import { NavLink } from '../components/ui/NavLink'
import { Link } from '../components/ui/Link'

export function Root() {
    const location = useLocation()

    if (location.pathname === '/') {
        return (
            <Navigate to={'/trips'} replace={true} />
        )
    }



    return (
        <div className='max-w-md mx-auto h-dvh'>
            <div className='p-3 pb-[70px]'>
                <header className='flex justify-between items-baseline font-semibold text-xl mt-2 mb-8'>
                    <h1>Rosalia</h1>
                    <Link to={'/login'}>Login</Link>
                </header>
                <Outlet />
            </div>

            <nav className='h-[70px] fixed left-0 right-0 bottom-0 flex gap-4 justify-between p-2 bg-neutral-50 rounded-t-2xl'>
                <NavLink to={'/bookings'} icon={<Calendar />}>
                    Buchungen
                </NavLink>
                <NavLink to={'/trips'} icon={<Car />}>
                    Trips
                </NavLink>
                <NavLink to={'/location'} icon={<MapPin />}>
                    Location
                </NavLink>
                <NavLink to={'/fuel'} icon={<Fuel />}>
                    Tanken
                </NavLink>
            </nav>
        </div>
    )
}
