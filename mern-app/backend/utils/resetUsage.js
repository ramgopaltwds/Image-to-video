import User from "../models/User.js";

export const resetDailyUsageIfNeeded = async (user) => {
  const now = new Date();
  const last = new Date(user.lastReset);

  const isNewDay =
    now.getDate() !== last.getDate() ||
    now.getMonth() !== last.getMonth() ||
    now.getFullYear() !== last.getFullYear();

  if (isNewDay) {
    user.videosUsedToday = 0;
    user.lastReset = now;
    await user.save();
  }

  return user;
};