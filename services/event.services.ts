// eventService.ts
import { getAllEventsCount, getTopEvents } from '@/actions/event.action';
import { toast } from 'sonner';

export async function getTotalEventCount(): Promise<number | null> {
	try {
		const count = await getAllEventsCount(); // Assuming getAllEventsCount is defined elsewhere

		return count;
	} catch (error) {
		toast.error('Failed to fetch event count');

		return null;
	}
}

export interface Event {
	id: string;
	name: string;
	date: string;

	// Add more fields if necessary
}

export async function fetchTopEvents(limit: number): Promise<Event[] | null> {
	try {
		const eventsData = await getTopEvents(limit);

		return eventsData;
	} catch (error) {
		toast.error('Failed to fetch top events');

		return null;
	}
}
