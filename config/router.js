import express from "express";

import { getAboutMe } from "../controllers/about_me.js";
import { getExperience } from "../controllers/experience.js";
import { getProjects, getProject } from "../controllers/projects.js";
import { getImages } from "../controllers/home_page_images.js";

const router = express.Router();

router.route("/about_me").get(getAboutMe);
router.route("/home_page").get(getImages);
router.route("/experience").get(getExperience);
router.route("/projects").get(getProjects);
router.route("/projects/:id").get(getProject);

export default router;
