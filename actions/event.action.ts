"use server";
import { EventRegisterSchema } from "@/schema/event-schema";
import * as z from "zod";
import { db } from "@/lib/database.connection";

export const registerEvent = async (values: z.infer<typeof EventRegisterSchema>) => {
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

  return { success: "Event created successfully" };
};


export const getAllEvents = async () => {
  try {
    const events = await db.event.findMany();
    return events;
  } catch {
    return "no events found";
  }
};