import sharp from "sharp";
import cloudinary from "../config/cloudinary.js";

export const processImage = async (filePath) => {
  const outputPath = filePath + "-processed.jpg";

  await sharp(filePath)
    .resize(1024, 1024, { fit: "inside" })
    .jpeg({ quality: 90 })
    .toFile(outputPath);

  const result = await cloudinary.uploader.upload(outputPath, {
    folder: "image-to-video",
  });

  return result.secure_url;
};