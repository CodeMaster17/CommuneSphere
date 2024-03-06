import { Button } from '@/components/ui/button'
import Link from 'next/link'
import EventListSection from './../../../components/event/EventListSection';
import Breadcrumb from '@/components/shared/Breadcrumb';

const Events = () => {
    return (
        <div className='w-full'>
            <div className='flex w-full justify-between'>
            <Breadcrumb />
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
