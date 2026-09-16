import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.ts";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
});


const prisma = new PrismaClient({
    adapter
});

async function main() {
    await prisma.$connect();

    console.log("Prisma connected to PostgreSQL");
}

main()
    .catch((error) => {
        console.error("Database connection failed:", error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
    
export { prisma }