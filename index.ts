import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import router from "./router";
import swaggerUi from "swagger-ui-express";
import * as swaggerJsDoc from "swagger-jsdoc";

dotenv.config();

const app: Express = express();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Test",
      version: "1.0.0",
    },
  },
  apis: ["./src/api/*/*.route.ts"],
};

const swaggerDocs = swaggerJsDoc.default(swaggerOptions);
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
