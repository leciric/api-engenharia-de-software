/* eslint-disable @typescript-eslint/ban-ts-comment */
import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";

import express from "express";
import cors from "cors";

import swaggerUi from "swagger-ui-express";
// @ts-ignore
import swaggerFile from "./swagger.json";
import "../../container";

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => console.log("Server is running at localhost:3333"));
