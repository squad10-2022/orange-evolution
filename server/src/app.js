import express from "express";
import routes from "./routes/routes";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./swagger.json";

class App {
  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routes);
  }
}

module.exports = new App().app;
