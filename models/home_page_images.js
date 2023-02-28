import mongoose from "mongoose";

const homePageImagesSchema = new mongoose.Schema({
  images: [{ type: String, required: false }],
});

export default mongoose.model("HomePageImages", homePageImagesSchema);
