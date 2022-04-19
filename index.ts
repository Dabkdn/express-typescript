import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import router from "./router";

dotenv.config();

const app: Express = express();

app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
