import express from "express";
import { create, getAll, remove } from "../controllers/pointsController.js";

const router = express.Router();

router.get("/", getAll);
router.post("/", create);
router.put("/", (req, res) => {
  res.send("TODO: Implement PUT request");
});
router.delete("/", remove);

export default router;
