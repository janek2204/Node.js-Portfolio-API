import mongoose from "mongoose";

const linksSchema = new mongoose.Schema({
  gitHub: { type: String },
  web_link: { type: String },
});

const projectScheam = new mongoose.Schema({
  title: { type: String, required: true },
  descripiton: { type: String, required: true },
  images: [linksSchema],
  links: [],
});

export default mongoose.model("Project", projectScheam);
