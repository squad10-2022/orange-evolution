import Users from "../models/Users";
import * as Yup from "yup";
// erro git
class UsersController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      admin: Yup.boolean(),
    });

    try {
      await schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { name, email, password, admin } = request.body;

    const userExists = await Users.findOne({ email }).exec();

    if (userExists) {
      return response.status(400).json({ error: "User already exists" });
    }

    await Users.create({
      name,
      email,
      password,
      admin,
    });

    return response
      .status(201)
      .json({ message: "User registered successfully" });
  }
}

export default new UsersController();
