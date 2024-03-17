import { PrismaClient } from "@prisma/client";


declare global {
    var prisma: PrismaClient | undefined;
}
//we create prisma because of hot reloads with nextjs, it will store the files created from the following line of code if we are not in production.

export const db= globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

