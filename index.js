import express from "express";
import mongoose from "mongoose";

import { port, dbURI } from "./config/environment.js";
import router from "./config/router.js";

const app = express();

const startServer = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.use(express.json());

    app.use(router);

    app.use((req, _res, next) => {
      console.log(`Incoming request ${req.method} = ${req.url}`);
      next();
    });
    app.listen(port, () => console.log(`express is running on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};
startServer();
