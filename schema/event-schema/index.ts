import * as z from "zod";

export const EventRegisterSchema = z.object({
    name: z.string().min(1, {
      message: "Event name is required",
    }),
    date: z.string().min(1,{
        message: "Event date is required"
    }),
    target_year: z.enum(["First", "Second", "Third", "Fourth"]),
    duration: z.coerce.number().optional(),
    expected_participants: z.string().min(1, {
        message: "Event expected participants is required",
      }),
    actual_participants: z.string().min(1, {
      message: "Event actual participants is required",
    }),
    location: z.string().optional(),
    event_thumbnail: z.string().optional(),
  });