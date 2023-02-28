import mongoose from "mongoose";
import { dbURI } from "../config/environment.js";

import AboutMe from "../models/about_me.js";
import aboutMeData from "../db/data/about_me.js";

import Experience from "../models/experience.js";
import experienceData from "./data/experience.js";

import Projects from "../models/projects.js";
import projectsData from "./data/projects.js";

import HomePageImages from "../models/home_page_images.js";
import home_page_images from "./data/home_page_images.js";

const seedDataBase = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("Connected to db");

    await mongoose.connection.db.dropDatabase();
    console.log("Database dropped");

    const about_me = await AboutMe.create(aboutMeData);
    const home_page = await HomePageImages.create(home_page_images);
    const experience = await Experience.create(experienceData);
    const projects = await Projects.create(projectsData);

    await mongoose.connection.close();
    console.log("DB connection closed");
  } catch (err) {
    console.log("Something went wrong", err);
  }
};

seedDataBase();
