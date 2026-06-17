import express from "express";
import {
  createVideoJob,
  getVideoJob,
} from "../controllers/videoController.js";

const router = express.Router();

router.post(
  "/create",
  protect,
  checkVideoLimit,
  upload.single("image"),
  createVideoJob
);
router.get("/:id", getVideoJob);

export default router;