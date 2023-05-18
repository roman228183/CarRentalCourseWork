/** @format */

import express from "express";
import dotenv from "dotenv";
import Db from "./db/db";
import logger from "./logger";
import routes from "./routes/allrouters";

dotenv.config();

const app = express();

const PORT = +process.env.PORT || 5000;

app.use(express.json());

app.use("/api", routes);

logger.error("error");
logger.info("info");

const start = async () => {
  try {
    await Db.sync();
    await Db.authenticate();
    app.listen(PORT, () => logger.info("Server work " + PORT));
  } catch (e) {
    logger.info(e);
  }
};

start();
