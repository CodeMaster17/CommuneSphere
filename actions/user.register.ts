/* eslint-disable camelcase */
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
  const {
    email,
    password,
    name,
    role,
    roll_number,
    phone,
    current_year,
    branch,
    year_of_joining,
    position,
    github,
    linkedin,
    instagram,
    twitter,
    facebook,
    domain,
    gender,
    personal_email,
  } = validatedFields.data;
  const exisitingUser = await getUserByEmail(email);
  if (exisitingUser) {
    return { error: "User already exists" };
  }
  await db.user.create({
    data: {
      name,
      email,
      password,
      role,
      roll_number,
      phone,
      current_year,
      branch,
      year_of_joining,
      position,
      github,
      domain,
      gender,
      linkedin,
      instagram,
      twitter,
      facebook,
      personal_email,
    },
  });

  return { success: "User created successfully" };
};
