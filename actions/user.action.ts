"use server";
import { db } from "@/lib/database.connection";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });
    return user;
  } catch {
    return null;
  }
};

// get all users
export const getAllUsers = async () => {
  try {
    const users = await db.user.findMany();
    return users;
  } catch {
    return null;
  }
};

// to count all members
export const countAllUsers = async () => {
  try {
    const count = await db.user.count();
    console.log(count);
    return count;
  } catch {
    return null;
  }
};
