import { Router } from "express";
import { Users } from "../users/model";

const routes = new Router();

//exemplo de documentação com swagger (ver: localhost:300/docs)

/**
 * @swagger
 *
 * /:
 *   get:
 *     summary: test endpoint.
 *     tags:
 *     - test
 *     description: get a test message.
 *     responses:
 *       200:
 *         description: A test message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: test message
 *                   example: Teste ok!
 */
routes.get("/", (request, response) => {
  return response.status(200).json({ msg: "Teste ok!" });
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
    response.status(201).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default routes;
