"use server";
import { RegisterSchema } from "@/schema";
import * as z from "zod";
import { getUserByEmail } from "./user.action";
import { db } from "@/lib/database.connection";
export const registerUser = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    throw new Error("Invalid fields");
  }
  const { email, password, name, role } = validatedFields.data;
  const exisitingUser = await getUserByEmail(email);
  if (exisitingUser) {
    throw new Error("User already exists");
  }
  await db.user.create({
    data: {
      name,
      email,
      password,
      role,
    },
  });

  return { success: "User created successfully" };
};
