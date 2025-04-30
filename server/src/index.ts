// import express from "express";
// import { PrismaClient } from "@prisma/client";
// import cors from "cors";
// import { BusinessInput } from "./types";

// const prisma = new PrismaClient();
// const app = express();
// const PORT = 3001;

// app.use(cors());
// app.use(express.json());

// // Get all businesses
// app.get("/api/businesses", async (req, res) => {
//   try {
//     const businesses = await prisma.business.findMany();
//     res.json(businesses);
//   } catch (error) {
//     console.error("Error fetching businesses:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// // Add a new business
// app.post("/api/businesses", async (req, res) => {
//   try {
//     const { name, address, city, country, category, lat, lng }: BusinessInput =
//       req.body;

//     const newBusiness = await prisma.business.create({
//       data: {
//         name,
//         address,
//         city,
//         country,
//         category,
//         lat,
//         lng,
//         acceptsUSDC: true, // Default value
//       },
//     });

//     res.status(201).json(newBusiness);
//   } catch (error) {
//     console.error("Error creating business:", error);
//     res.status(400).json({ error: "Invalid business data" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
