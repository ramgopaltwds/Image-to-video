import VideoJob from "../models/VideoJob.js";

export const createVideoJob = async (req, res) => {
  const user = req.userData;

  const imageUrl = req.file.path;

  const job = await VideoJob.create({
    userId: user._id,
    imageUrl,
    status: "pending",
  });

  // increase usage only for free users
  if (user.plan === "free") {
    user.videosUsedToday += 1;
    await user.save();
  }

  await videoQueue.add("generate-video", {
    jobId: job._id,
    imageUrl,
  });

  res.json({ jobId: job._id });
};