import { PrismaClient } from '@prisma/client';

declare global {
  // Extend the type definition of `globalThis` to include `prisma`
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;
