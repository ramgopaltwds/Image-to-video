import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,

  plan: {
    type: String,
    enum: ["free", "pro"],
    default: "free",
  },

  videosUsedToday: {
    type: Number,
    default: 0,
  },

  lastReset: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", userSchema);