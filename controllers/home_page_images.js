import HomePageImagesSchema from "../models/home_page_images.js";

export const getImages = async (_req, res) => {
  try {
    const images = await HomePageImagesSchema.find();
    if (!images) throw new Error();
    return res.status(200).json(images);
  } catch (err) {
    return res.status(400).json(err);
  }
};
