import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Breadcrumb from '@/components/shared/Breadcrumb';
import { Heading } from '@/components/shared/Heading'
import EventCount from '@/components/event/EventCount';
import { EventType, columns } from "@/components/table/event/event-column"
import { DataTable } from "@/components/table/event/event-data-table"
import { getAllEvents } from '@/actions/event.action';



async function getData(): Promise<EventType[]> {

    const data = await getAllEvents()

    // only returning the required fields
    return data?.map((event) => {
        return {
            id: event.id,
            name: event.name,
            date: event.date,
            actual_participants: event.actual_participants,
            duration: event.duration,
            target_year: event.target_year,
        }
    }) || []
}



const Events = async () => {
    const data = await getData()
    return (
        <div className='w-full'>
            <div className='flex w-full justify-between'>
            <Breadcrumb />
                <Button asChild variant="outline">
                    <Link href="/dashboard/events/add-event">Add Event</Link>
                </Button>
            </div>
            <div className='mt-4 w-full flex items-center gap-2'>
                <Heading type="medium">
                    Events
                </Heading>
                <EventCount />
            </div>
            <div>
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    )
}

export default Events
