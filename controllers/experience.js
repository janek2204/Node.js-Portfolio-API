import Experience from "../models/experience.js";

export const getExperience = async (_req, res) => {
  try {
    const experience = await Experience.find();
    if (!experience) throw new Error();
    return res.status(200).json(experience);
  } catch (err) {
    return res.status(400).json(err);
  }
};
