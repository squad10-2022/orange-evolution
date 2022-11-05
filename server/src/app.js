import express from "express";
import routes from "./routes/routes";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
export const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Orange Evolution",
      version: "1.0.0",
      description: "A simple study content manager",
      contact: {
        email: "teste@gmail.com",
      },
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
      {
        url: "http://todo.com",
        description: "Production server",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerDoc = swaggerJsDoc(swaggerOptions);

app
  .use(express.json(), cors())
  .use(routes)
  .use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
