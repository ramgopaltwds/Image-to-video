import User from "../models/User.js";
import { resetDailyUsageIfNeeded } from "../utils/resetUsage.js";

export const checkVideoLimit = async (req, res, next) => {
  const user = await User.findById(req.user.id);

  await resetDailyUsageIfNeeded(user);

  if (user.plan === "free" && user.videosUsedToday >= 3) {
    return res.status(403).json({
      error: "Daily limit reached. Upgrade to Pro.",
    });
  }

  req.userData = user;
  next();
};