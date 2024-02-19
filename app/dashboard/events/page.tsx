import { Button } from '@/components/ui/button'
import Link from 'next/link'
import EventListSection from './../../../components/event/EventListSection';

const Events = () => {
    return (
        <div className='w-full'>
            <div>
                <Button asChild variant="outline">
                    <Link href="/dashboard/events/add-event">Add Event</Link>
                </Button>
            </div>
            <div>
                <EventListSection />
            </div>
        </div>
    )
}

export default Events
