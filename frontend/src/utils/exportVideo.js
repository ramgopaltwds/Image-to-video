import { FFmpeg } from "@ffmpeg/ffmpeg";

const ffmpeg = new FFmpeg();

export const exportVideo = async (images) => {
  try {
    if (!ffmpeg.loaded) {
      await ffmpeg.load();
    }

    console.log("Creating video from images...");

    // images = array of png files
    images.forEach((img, index) => {
      ffmpeg.writeFile(`frame${index}.png`, img);
    });

    await ffmpeg.exec([
      "-framerate",
      "1",
      "-i",
      "frame%d.png",
      "-c:v",
      "libx264",
      "-pix_fmt",
      "yuv420p",
      "output.mp4",
    ]);

    const data = await ffmpeg.readFile("output.mp4");

    const url = URL.createObjectURL(
      new Blob([data.buffer], {
        type: "video/mp4",
      })
    );

    const a = document.createElement("a");
    a.href = url;
    a.download = "video.mp4";
    a.click();

    return url;
  } catch (err) {
    console.error(err);
  }
};