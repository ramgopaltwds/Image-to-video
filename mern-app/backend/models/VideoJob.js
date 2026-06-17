import mongoose from "mongoose";

const videoJobSchema = new mongoose.Schema(
  {
    userId: mongoose.Schema.Types.ObjectId,
    imageUrl: String,
    videoUrl: String,
    status: {
      type: String,
      enum: ["pending", "processing", "done", "failed"],
      default: "pending",
    },
    progress: { type: Number, default: 0 },
    error: String,
  },
  { timestamps: true }
);

export default mongoose.model("VideoJob", videoJobSchema);