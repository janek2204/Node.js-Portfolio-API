import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  job_experience_description: { type: String, required: true },
});

export default mongoose.model("Experience", experienceSchema);
