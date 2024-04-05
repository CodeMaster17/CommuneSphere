/* eslint-disable camelcase */
"use server";
import { EventRegisterSchema } from "@/schema/event-schema";
import * as z from "zod";
import { db } from "@/lib/database.connection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const registerEvent = async (
  values: z.infer<typeof EventRegisterSchema>
) => {
  const validatedFields = EventRegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    throw new Error("Invalid fields");
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
  revalidatePath("/dashboard/events");
  redirect("/dashboard/events");
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
  } catch (error) {
    console.error("Error deleting event:", error);
    throw new Error("Failed to delete event");
  }
  redirect("/dashboard/events");
};

export const updateEvent = async (
  eventId: string,
  updatedEventData: z.infer<typeof EventRegisterSchema>
) => {
  try {
    const validatedFields = EventRegisterSchema.safeParse(updatedEventData);
    if (!validatedFields.success) {
      throw new Error("Invalid fields");
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

    return { success: "Event updated successfully" };
  } catch (error) {
    console.error("Error updating event:", error);
    throw new Error("Failed to update event");
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
    console.error("Error deleting event:", error);
    throw new Error("Failed to find event");
  }
};
