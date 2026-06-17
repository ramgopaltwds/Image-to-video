import VideoJob from "../models/VideoJob.js";
import { uploadToCloudinary } from "../utils/uploadToCloudinary.js";
// create job
export const createVideoJob = async (req, res) => {
  try{
     const cloudResult = await uploadToCloudinary(req.file.buffer);
  
     const imageUrl = cloudResult.secure_url;

  const job = await VideoJob.create({
    userId: req.user.id,
    imageUrl,
    status:"pending",
  });

  res.json({ jobId: job._id });
}catch (err) {
    res.status(500).json({ error: err.message });
  }
}
// 🔥 ADD THIS (missing function)
export const getVideoJob = async (req, res) => {
  const job = await VideoJob.findById(req.params.id);
  res.json(job);
};