import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import userRoutes from "./routes/user";
import houseRoutes from "./routes/house";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/users", userRoutes);
app.use("/houses", houseRoutes);

app.get("/", (req, res) => {
  res.send("Server Berjalan");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
