import { UserRole } from "@prisma/client";
import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  // name, email, password, role
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  role: z.enum(["ADMIN", "USER"]),
  roll_number: z.string().optional(),
  phone: z.string().optional(),
  current_year: z.enum(["First", "Second", "Third", "Fourth"]).optional(),
  branch: z
    .enum(["CSE", "ECE", "ME", "CE", "EE", "IT", "MCA", "MBA"])
    .optional(),
  year_of_joining: z
    .enum(["Y_2020", "Y_2021", "Y_2022", "Y_2023", "Y_2024", "Y_2025"])
    .optional(),
  position: z
    .enum([
      "Member",
      "Lead",
      "Vice_Lead",
      "Tech_Lead",
      "PR_Lead",
      "CR_Lead",
      "Executive",
      "Creative_Lead",
      "Design_Lead",
      "Ar_Lead",
      "Web_Lead",
      "App_Lead",
      "Vr_Lead",
    ])
    .optional(),
  github: z.string().url({ message: "Enter valid github link" }).optional(),
  linkedin: z.string().url({ message: "Enter valid linkedin link" }).optional(),
  instagram: z
    .string()
    .url({ message: "Enter valid instagram link" })
    .optional(),
  twitter: z.string().url({ message: "Enter valid twitter link" }).optional(),
  facebook: z.string().url({ message: "Enter valid facebook link" }).optional(),
  personal_email: z.string().email({ message: "Enter valid email" }).optional(),
});
