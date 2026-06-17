import express from "express";
import { createVideoJob,getVideoJob } from "../controllers/videoController.js";
import { protect } from "../middleware/auth.js"; 
import upload from "../middleware/upload.js";
import { checkVideoLimit } from "../middleware/limitCheck.js"; 
const router = express.Router();

router.post(
  "/create",
  protect,
  checkVideoLimit,
  upload.single("image"),
  createVideoJob,
);
router.get("/:id", getVideoJob);

export default router;
