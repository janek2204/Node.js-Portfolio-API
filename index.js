import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 4000;
const dbURI = "mongodb://localhost/portfolio-api";

app.use(express.json());

app.use((req, _res, next) => {
  console.log(`Incoming request ${req.method} = ${req.url}`);
  next();
});

const expirianceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  job_expiriance_description: { type: String, required: true },
});

const aboutMeSchema = new mongoose.Schema({
  about_me: { type: String, required: true },
});

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

const AboutMe = mongoose.model("AboutMe", aboutMeSchema);
const Expiriance = mongoose.model("Expiriance", expirianceSchema);
const Project = mongoose.model("Project", projectScheam);

const startServer = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Db connected");
  } catch (err) {
    console.log(err);
  }
};
startServer();

app.get("/about_me", async (_req, res) => {
  try {
    const about_me = await AboutMe.find();
    return res.status(200).json(about_me);
  } catch (err) {
    return res.status(400).json(err);
  }
});

app.get("/expiriance", async (_req, res) => {
  try {
    const expiriance = await Expiriance.find();
    return res.status(200).json(expiriance);
  } catch (err) {
    return res.status(400).json(err);
  }
});

app.get("/projects", async (_req, res) => {
  try {
    const project = await Project.find();
    return res.status(200).json(project);
  } catch (err) {
    return res.status(400).json(err);
  }
});

app.get("/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getSingleProject = await Project.findById(id);
    return res.status(200).json(getSingleProject);
  } catch (err) {
    return res.status(400).json(err);
  }
});

app.listen(port, () => console.log(`express is running on port ${port}`));
