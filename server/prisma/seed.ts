// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// const businessData = [
//   {
//     name: "Crypto Cafe",
//     address: "123 Blockchain Blvd",
//     city: "San Francisco",
//     country: "USA",
//     category: "cafe",
//     acceptsUSDC: true,
//     lat: 37.7749,
//     lng: -122.4194,
//   },
//   // Add more seed data as needed
// ];

// async function main() {
//   console.log("🌱 Starting seed...");

//   // Clean existing data (optional)
//   await prisma.business.deleteMany();
//   console.log("🧹 Cleaned existing data");

//   // Insert seed data
//   await prisma.business.createMany({
//     data: businessData,
//     skipDuplicates: true,
//   });

//   console.log(`✅ Successfully seeded ${businessData.length} businesses`);
// }

// main()
//   .catch((e) => {
//     console.error("❌ Seed failed", e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
