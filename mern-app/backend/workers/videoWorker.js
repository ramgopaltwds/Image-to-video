import { Worker } from "bullmq";
import IORedis from "ioredis";
import VideoJob from "../models/VideoJob.js";
import { generateVideo } from "../services/replicateService.js";
import { io } from "../server.js";

const connection = new IORedis(process.env.REDIS_URL);

export const videoWorker = new Worker(
  "videoQueue",
  async (job) => {
    const { jobId, imageUrl } = job.data;

    try {
      await VideoJob.findByIdAndUpdate(jobId, {
        status: "processing",
        progress: 10,
      });

      io.emit("job-update", { jobId, progress: 10 });

      const videoUrl = await generateVideo(imageUrl);

      await VideoJob.findByIdAndUpdate(jobId, {
        status: "done",
        progress: 100,
        videoUrl,
      });

      io.emit("job-update", { jobId, progress: 100, videoUrl });
    } catch (err) {
      await VideoJob.findByIdAndUpdate(jobId, {
        status: "failed",
        error: err.message,
      });

      io.emit("job-update", { jobId, error: err.message });
    }
  },
  { connection }
);