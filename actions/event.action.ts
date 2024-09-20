/* eslint-disable camelcase */
'use server';
import { db } from '@/lib/database.connection';
import { EventRegisterSchema } from '@/schema/event-schema';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import * as z from 'zod';

export const registerEvent = async (
	values: z.infer<typeof EventRegisterSchema>
) => {
	const validatedFields = EventRegisterSchema.safeParse(values);
	if (!validatedFields.success) {
		throw new Error('Invalid fields');
	}
	const {
		name,
		date,
		target_year,
		duration,
		expected_participants,
		actual_participants,
		location,
		event_thumbnail,
	} = validatedFields.data;
	await db.event.create({
		data: {
			name,
			date,
			target_year,
			duration,
			expected_participants,
			actual_participants,
			location,
			event_thumbnail,
		},
	});
	revalidatePath('/dashboard/events');
	redirect('/dashboard/events');

	// return { success: "Event created successfully" };
};

export const getAllEvents = async () => {
	try {
		const events = await db.event.findMany();

		return events;
	} catch {
		return null;
	}
};

export const getAllEventsCount = async () => {
	try {
		const count = await db.event.count();

		return count;
	} catch {
		return null;
	}
};

export const deleteEvent = async (eventId: string) => {
	try {
		await db.event.delete({
			where: {
				id: eventId,
			},
		});

		revalidatePath('/dashboard/events');
	} catch {
		return null;
	}
};

export const updateEvent = async (
	eventId: string,
	updatedEventData: z.infer<typeof EventRegisterSchema>
) => {
	try {
		const validatedFields = EventRegisterSchema.safeParse(updatedEventData);
		if (!validatedFields.success) {
			throw new Error('Invalid fields');
		}

		const {
			name,
			date,
			target_year,
			duration,
			expected_participants,
			actual_participants,
			location,
			event_thumbnail,
		} = validatedFields.data;

		await db.event.update({
			where: {
				id: eventId,
			},
			data: {
				name,
				date,
				target_year,
				duration,
				expected_participants,
				actual_participants,
				location,
				event_thumbnail,
			},
		});

		return { success: 'Event updated successfully' };
	} catch (error) {
		console.error('Error updating event:', error);
		throw new Error('Failed to update event');
	}
};

export const getEventId = async (eventId: string) => {
	try {
		const ret = await db.event.findUnique({
			where: {
				id: eventId,
			},
		});

		return ret;
	} catch (error) {
		return null;
	}
};

// Calculate average participation for all events
export const countAvgParticipation = async () => {
	try {
		const events = await getAllEvents();
		if (!events || events.length === 0) {
			return 0;
		}

		let totalParticipation = 0;
		for (const event of events) {
			if (event.actual_participants !== 'upcoming') {
				totalParticipation += parseInt(event.actual_participants);
			}
		}

		const avgParticipation = totalParticipation / events.length;

		// Round off to the nearest whole number
		const roundedAvgParticipation = Math.round(avgParticipation);

		return roundedAvgParticipation;
	} catch (error) {
		console.error('Error calculating average participation:', error);
		throw new Error('Failed to calculate average participation');
	}
};

// Calculate average registration for all events
export const countAvgRegistration = async () => {
	try {
		const events = await getAllEvents();
		if (!events || events.length === 0) {
			return 0;
		}

		let totalRegistrations = 0;
		for (const event of events) {
			totalRegistrations += 1; // Assuming each event represents one registration
		}

		const avgRegistration = totalRegistrations / events.length;

		return avgRegistration;
	} catch (error) {
		console.error('Error calculating average registration:', error);
		throw new Error('Failed to calculate average registration');
	}
};

export const getTopEvents = async (limit: number) => {
	try {
		const events = await db.event.findMany({
			orderBy: {
				actual_participants: 'desc', // Sort events by actual_participants in descending order
			},
			take: limit, // Limit the number of events to retrieve
		});

		return events;
	} catch (error) {
		console.error('Error fetching top events:', error);
		throw new Error('Failed to fetch top events');
	}
};
