import { Router } from "express";
import AddClassDoneController from "../app/controllers/AddClassDoneController";
import ClassesController from "../app/controllers/ClassesController";
import LevelsController from "../app/controllers/LevelsController";
import ModulesController from "../app/controllers/ModulesController";
import SessionController from "../app/controllers/SessionController";
import TrailsController from "../app/controllers/TrailsController";
import UsersController from "../app/controllers/UsersController";

import authMiddleware from "../app/middlewares/auth";

const routes = new Router();

routes.post("/users", UsersController.store);

routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.post("/trails", TrailsController.store);
routes.get("/trails", TrailsController.index);
routes.get("/trails/:id", TrailsController.show);

routes.post("/trails/:id/levels", LevelsController.store);
routes.get("/trails/:id/levels/:idLevel", LevelsController.show);

routes.post("/trails/:id/levels/:idLevel/modules", ModulesController.store);
routes.get(
  "/trails/:id/levels/:idLevel/modules/:idModule",
  ModulesController.show
);

routes.post(
  "/trails/:id/levels/:idLevel/modules/:idModule/classes",
  ClassesController.store
);

routes.patch("/classes/:idClass", AddClassDoneController.update);

export default routes;
