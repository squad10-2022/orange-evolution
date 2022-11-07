import { Router } from "express";
import { Users } from "../users/model";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.status(200).json({ msg: "Teste ok!" });
});

//exemplo de rotas conectadas com mongoDB
routes.get("/users", async (req, res) => {
  const users = await Users.find({});
  try {
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

routes.post("/users", async (req, res) => {
  const user = new Users(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default routes;
