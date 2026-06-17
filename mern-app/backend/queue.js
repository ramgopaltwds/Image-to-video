import dotenv from "dotenv";
dotenv.config();

import { Queue } from "bullmq";
import connection from "./config/redis.js";

export const videoQueue = new Queue("video-generation", {
  connection,
});