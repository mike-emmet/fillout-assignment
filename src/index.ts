import express, { Express } from "express";
import dotenv from "dotenv";
import { getFormResponse } from "./controller/forms";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/:formId/filteredResponses", getFormResponse);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});