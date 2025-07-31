import { Router } from "express";
import { getHouse, createHouse } from "../controllers/houseControllers";

const router = Router();

router.get("/", getHouse);
router.post("/", createHouse);

export default router;
