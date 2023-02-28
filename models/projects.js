import mongoose from "mongoose";

const linksSchema = new mongoose.Schema({
  gitHub: { type: String },
  web_link: { type: String },
});

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String }],
  links: [linksSchema],
});

export default mongoose.model("Project", projectSchema);
