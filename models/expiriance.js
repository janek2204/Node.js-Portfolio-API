import mongoose from "mongoose";

const expirianceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  job_expiriance_description: { type: String, required: true },
});

export default mongoose.model("Expiriance", expirianceSchema);
