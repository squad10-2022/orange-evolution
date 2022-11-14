import * as Yup from "yup";
import Levels from "../models/Levels";
import Trails from "../models/Trails";
import { ObjectId } from "mongodb";
import Modules from "../models/Modules";
import Classes from "../models/Classes";

class ModulesController {
  async store(request, response) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
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

    const levelId = request.params.idLevel;
    try {
      ObjectId(levelId);
    } catch (error) {
      return response.status(400).json({ error });
    }
    const levelExists = await Levels.findOne({ _id: ObjectId(levelId) }).exec();
    if (!levelExists) {
      return response.status(400).json({ error: "Level Id does not exist" });
    }

    const { title } = request.body;

    try {
      await Modules.create({
        title,
        levelId,
      });
    } catch (error) {
      return response.status(400).json({ error });
    }

    return response
      .status(201)
      .json({ message: "Module registered successfully" });
  }

  async show(request, response) {
    const ModuleId = request.params.idModule;

    Classes.find({ ModuleId }, function (err, classes) {
      if (!err) {
        return response.json(classes);
      } else {
        throw err;
      }
    });
  }
}

export default new ModulesController();
