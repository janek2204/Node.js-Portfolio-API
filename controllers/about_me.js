import AboutMe from "../models/about_me.js";

export const getAboutMe = async (_req, res) => {
  try {
    const about_me = await AboutMe.find();
    if (!about_me) throw new Error();
    return res.status(200).json(about_me);
  } catch (err) {
    return res.status(400).json(err);
  }
};
