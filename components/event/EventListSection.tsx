// In event.action.ts
import { getAllEvents } from '@/actions/event.action';

const EventListSection = async () => {
    try {
        const events = await getAllEvents();
        return (<>
        {Array.isArray(events) ? (
      events.map((event, index) => (
        <div key={index} className='mt-4'>
          <div>
            Name: {event.name}
          </div>
          <div>
            Date: {event.date}
          </div>
          <div >
            Target Year: {event.target_year}
          </div>
          <div >
            Duration: {event.duration}
          </div>
          <div>
            Expected Participants: {event.expected_participants}
          </div>
          <div>
            Actual Participants: {event.actual_participants}
          </div>
          <div>
            Location: {event.location}
          </div>
          <div >
            Event Thumbnail: {event.event_thumbnail}
          </div>
        </div>
      ))
    ) : (
      <div className='w-full'>
        No events found
      </div>
    )}
            </>
        );
    } catch (error) {
        console.error('Error retrieving events:', error);
        return (
            <div className='w-full'>
                {/* Render an error message */}
            </div>
        );
    }
};

export default EventListSection;
