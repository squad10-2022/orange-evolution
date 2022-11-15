import * as Yup from "yup";
import Trails from "../models/Trails";
import Levels from "../models/Levels";

class TrailsController {
  async store(request, response) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      summary: Yup.array().required(),
    });

    try {
      await schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    if (!request.userAdmin) {
      return response
        .status(401)
        .json({ error: "Admin authorization is required" });
    }

    const { title, summary } = request.body;

    const userExists = await Trails.findOne({ title }).exec();

    if (userExists) {
      return response.status(400).json({ error: "Trail already exists" });
    }

    await Trails.create({
      title,
      summary,
    });

    return response
      .status(201)
      .json({ message: "Trail registered successfully" });
  }

  async index(request, response) {
    Trails.find({}, function (err, trails) {
      if (!err) {
        return response.json(trails);
      } else {
        throw err;
      }
    });
  }

  async show(request, response) {
    const trailId = request.params.id;

    Levels.find({ trailId }, function (err, levels) {
      if (!err) {
        return response.json(levels);
      } else {
        throw err;
      }
    });
  }
}

export default new TrailsController();
