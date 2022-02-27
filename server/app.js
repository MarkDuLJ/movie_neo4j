import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";

import errorMiddleware from "./middleware/error.middleware.js";
import routes from "./routes/index.js";
import { initDriver } from "./neo4j.js";

config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const { NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD } = process.env;

initDriver(NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD);
console.log(`neo4j database: ${NEO4J_URI} is running`);

app.use(errorMiddleware);

app.use("/api", routes);

export default app;
