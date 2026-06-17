import { Queue } from "bullmq";
import IORedis from "ioredis";

const connection = new IORedis(process.env.REDIS_URL);

export const videoQueue = new Queue("videoQueue", {
  connection,
});

export default connection;