import express from "express";
import routes from "./routes/routes";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./swagger.json";
export const app = express();

app
  .use(express.json(), cors())
  .use(routes)
  .use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
