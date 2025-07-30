import express from "express";
import prisma from "./prisma";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post("/user", async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, email },
    });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: "Could not create user", details: err });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
