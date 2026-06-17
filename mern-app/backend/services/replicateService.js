import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export const generateVideo = async (imageUrl) => {
  const output = await replicate.run(
    "stability-ai/stable-video-diffusion",
    {
      input: { image: imageUrl },
    }
  );

  return output;
};