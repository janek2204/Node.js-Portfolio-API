import mongoose from "mongoose";

const aboutMeSchema = new mongoose.Schema({
  about_me: { type: String, required: true },
});

export default mongoose.model("AboutMe", aboutMeSchema);
