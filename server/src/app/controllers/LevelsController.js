import * as Yup from "yup";
import Levels from "../models/Levels";
import Trails from "../models/Trails";
import { ObjectId } from "mongodb";

class LevelsController {
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

    const trailId = request.params.id;
    try {
      ObjectId(trailId);
    } catch (error) {
      return response.status(400).json({ error });
    }
    const trailExists = await Trails.findOne({ _id: ObjectId(trailId) }).exec();
    if (!trailExists) {
      return response.status(400).json({ error: "Trail Id does not exist" });
    }

    const { title, summary } = request.body;

    try {
      await Levels.create({
        title,
        summary,
        trailId,
      });
    } catch (error) {
      return response.status(400).json({ error });
    }

    return response
      .status(201)
      .json({ message: "Level registered successfully" });
  }

  async index(request, response) {
    const trailId = request.params.id;

    Levels.find({ trailId }, function (err, levels) {
      if (!err) {
        return response.json(levels);
      } else {
        throw err;
      }
    }).populate("trailId");
  }
}

export default new LevelsController();
