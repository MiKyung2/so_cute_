import express from "express";
import Replicate from "replicate";
const replicate = new Replicate({
  auth: process.env.STABILITY_AI_TOKEN,
});

const router = express.Router();
async function generateImage(prompt) {
  const input = {
    prompt,
    aspect_ratio: "3:2",
  };

  try {
    const response = await replicate.run("stability-ai/stable-diffusion-3", {
      input,
    });
    console.log(`Generated Image URL: ${response}`);

    return response;
  } catch (error) {
    console.error(`Error generating image: ${error}`);
  }
}

router.use(async (req, res) => {
  const { q } = req.query;
  try {
    const response = await generateImage(q);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
