import express from "express";
import { PrismaClient } from "@prisma/client";
import userRoutes from "./routes/user";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server Berjalan");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
