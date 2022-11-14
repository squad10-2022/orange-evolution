import * as Yup from "yup";
import Users from "../models/Users";
import jwt from "jsonwebtoken";
import authConfig from "../../config/auth";

class Session {
  async store(request, response) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response
        .status(400)
        .json({ error: "Make sure your password or email are correct" });
    }

    const { email, password } = request.body;

    const user = await Users.findOne({ email }).exec();

    if (!user) {
      return response
        .status(401)
        .json({ error: "Make sure your password or email are correct" });
    }

    if (!(await user.comparePassword(password))) {
      return response
        .status(401)
        .json({ error: "Make sure your password or email are correct" });
    }

    return response.status(201).json({
      id: user._id,
      email,
      name: user.name,
      admin: user.admin,
      classes_done: user.classes_done,
      token: jwt.sign(
        {
          id: user._id,
          name: user.name,
          admin: user.admin,
          classes_done: user.classes_done,
        },
        authConfig.secret,
        {
          expiresIn: authConfig.expiresIn,
        }
      ),
    });
  }
}

export default new Session();
