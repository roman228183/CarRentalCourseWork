/** @format */

import express from "express";
import dotenv from "dotenv";
import Db from "./db/db";

const app = express();

const PORT = +process.env.PORT || 5000;

const start = async () => {
  try {
    await Db.sync();
    await Db.authenticate();
    app.listen(PORT, () => console.log("Serve