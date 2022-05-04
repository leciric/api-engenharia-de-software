/* eslint-disable @typescript-eslint/ban-ts-comment */
import cors from "cors";
import "dotenv/config";
import express from "express";
import "express-async-errors";
import "reflect-metadata";
//@ts-ignore
import swaggerUi from "swagger-ui-express";
import "../../container";
import { router } from "./routes";
// @ts-ignore
import swaggerFile from "./swagger.json";




const app = express();

app.use(express.json());

app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => console.log("Server is running at localhost:3333"));
