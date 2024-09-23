/* eslint-disable */
// @ts-nocheck
import { PrismaClient } from "@prisma/client";

// @ts-ignore 
declare global {
   var prisma: PrismaClient | undefined;
}
export const db = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
