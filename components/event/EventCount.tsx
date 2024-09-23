import React from 'react'
import { getAllEventsCount } from '@/actions/event.action';

const EventCount = async () => {
    try {
        const eventsCount = await getAllEventsCount();

        return (<div className=' text-gray-500 flex'>
            <div>(</div>
            {eventsCount}
            <div>)</div>
        </div>
        );
    } catch (error) {
        console.error('Error retrieving eventscount:', error);

        return (
            <div className='w-full'>
                {/* Render an error message */}
            </div>
        );
    }
}

export default EventCount
