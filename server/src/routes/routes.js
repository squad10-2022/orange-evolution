import { Router } from "express";
import LevelsController from "../app/controllers/LevelsController";
import SessionController from "../app/controllers/SessionController";
import TrailsController from "../app/controllers/TrailsController";
import UsersController from "../app/controllers/UsersController";

const routes = new Router();

routes.post("/users", UsersController.store);

routes.post("/sessions", SessionController.store);

routes.post("/trails", TrailsController.store);
routes.get("/trails", TrailsController.index);
routes.get("/trails/:id", TrailsController.show);

routes.post("/trails/:id/levels", LevelsController.store);
routes.get("/trails/:id/levels", LevelsController.index);

export default routes;
