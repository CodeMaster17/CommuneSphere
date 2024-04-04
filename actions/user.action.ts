"use server";
import { useDisplayYear } from "@/hooks/use-display-data";
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
    console.log("Finding user by id: ", id);
    const user = await db.user.findUnique({ where: { id } });
    console.log(user);
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
    return count;
  } catch {
    return null;
  }
};

export async function getServerSideProps() {
  const data = await getAllUsers();

  // Only returning the required fields
  const processedData =
    data?.map((user, index) => {
      return {
        sno: index + 1,
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        position: user.position,
        current_year: user.current_year,
        year_of_joining:
          (useDisplayYear(user.year_of_joining) as "2021") ||
          "2022" ||
          "2023" ||
          "2024" ||
          "2025" ||
          null,
      };
    }) || [];

  return { props: { data: processedData } };
}

// functtion to delete user from the database
export const deleteUser = async (id: string) => {
  try {
    const user = await db.user.delete({ where: { id } });
    return user;
  } catch {
    return null;
  }
};
