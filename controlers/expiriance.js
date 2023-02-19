import Expiriance from "../models/expiriance.js";

export const getExpiriance = async (_req, res) => {
  try {
    const expiriance = await Expiriance.find();
    if (!expiriance) throw new Error();
    return res.status(200).json(expiriance);
  } catch (err) {
    return res.status(400).json(err);
  }
};
