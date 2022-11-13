import { Router } from "express";
import SessionController from "../app/controllers/SessionController";
import UsersController from "../app/controllers/UsersController";

const routes = new Router();

routes.post("/users", UsersController.store);

routes.post("/sessions", SessionController.store);

export default routes;
