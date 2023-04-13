import express from "express";
import {
  create,
  getAll,
  getCritical,
} from "../controllers/samplesController.js";

const router = express.Router();

router.get("/", getAll);
router.get("/critical", getCritical);
router.post("/", create);
router.put("/", (req, res) => {
  res.send("TODO: Implement PUT request");
});
router.delete("/", (req, res) => {
  res.send("TODO: Implement DELETE request");
});

export default router;
