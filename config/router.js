import express from "express";

import { getAboutMe } from "../controlers/about_me.js";
import { getExpiriance } from "../controlers/expiriance.js";
import { getProjects, getProject } from "../controlers/projects.js";

const router = express.Router();

router.route("/about_me").get(getAboutMe);
router.route("/expiriance").get(getExpiriance);
router.route("/projects").get(getProjects);
router.route("/projects/:id").get(getProject);

export default router;
