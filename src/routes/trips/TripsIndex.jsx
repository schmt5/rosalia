import { Link } from "../../components/ui/Link"
import { FabLink } from "../../components/ui/FabLink"
import { Plus } from "lucide-react"
import useSWR from "swr"
import { pb } from "../../lib/pb"

const fetcher = (key) => pb.collection(key).getFullList({
    sort: '-created',
    expand: 'createdBy',
});

export function TripsIndex() {
    const { data } = useSWR('trips', fetcher)
    const trips = data

    const userId = '1'
    const fromFormatter = new Intl.DateTimeFormat('de-DE', {
        day: 'numeric',
        month: 'short',
    })
    const toFormatter = new Intl.DateTimeFormat('de-DE', {
        day: 'numeric',
        month: 'short',
        year: '2-digit',
    })

    return (
        <div className="flex flex-col gap-2">
            {trips?.map((trip) => {
                const from = new Date(trip.from)
                const to = new Date(trip.to)
                const isOneDayTrip = from.getDate() === to.getDate()
                const isCreatedByUser = trip.createdBy.id === userId

                return (
                    <div key={trip.id} className='flex gap-4 justify-between mb-4 rounded border'>
                        <div className='p-3'>
                            <p className="font-semibold">{trip.expand.createdBy.username}</p>
                            {isOneDayTrip ? <p>{toFormatter.format(to)}</p> :
                                (
                                    <p>{`${fromFormatter.format(from)} - ${toFormatter.format(to)}`}</p>
                                )}
                            {isCreatedByUser && (
                                <Link to={`/trips/edit/${trip.id}`}>
                                    Bearbeiten
                                </Link>
                            )}
                        </div>
                        <div className='py-3 px-6 bg-neutral-100 flex flex-col justify-center gap-0'>
                            <span className='font-semibold text-xl'>{trip.km}</span>
                            <span>km</span>
                        </div>
                    </div>
                )
            })}

            <FabLink to='create'>
                <Plus />
            </FabLink>
        </div>
    )
}
