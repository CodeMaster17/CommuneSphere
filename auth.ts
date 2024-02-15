import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { db } from "./lib/database.connection";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { getUserById } from "./actions/user.action";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db), // prisma adapter is supported on non edge
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  callbacks: {},
  session: { strategy: "jwt" },
  ...authConfig,
});

// sUsYyBcFzhcLrXYIYznbzoNH
// sUsYyBcFzhcLrXYIYznbzoNH
