import Projects from "../models/projects.js";

export const getProjects = async (_req, res) => {
  try {
    const project = await Projects.find();
    if (!project) throw new Error();
    return res.status(200).json(project);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export const getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const getSingleProject = await Projects.findById(id);
    if (!getSingleProject) throw new Error();
    return res.status(200).json(getSingleProject);
  } catch (err) {
    return res.status(400).json(err);
  }
};
