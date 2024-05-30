import React from 'react'
import { getAllEventsCount } from '@/actions/event.action';

const EventCount = async () => {
    try {
        const eventsCount = await getAllEventsCount();
        console.log("event count");
        console.log({eventsCount});
        return (<div className=' flex text-gray-500'>
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
