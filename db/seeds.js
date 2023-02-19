import mongoose from "mongoose";
import { dbURI } from "../config/enviroment";

const seedDataBase = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("Connected to db");
  } catch (err) {
    console.log("Something went wrong", err);
  }
};

seedDataBase();
