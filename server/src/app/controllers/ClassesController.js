import * as Yup from "yup";
import Levels from "../models/Levels";
import Trails from "../models/Trails";
import { ObjectId } from "mongodb";
import Modules from "../models/Modules";
import Classes from "../models/Classes";

class ClassesController {
  async store(request, response) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      video_files: Yup.array(),
      audio_files: Yup.array(),
      text_files: Yup.array(),
      practice_files: Yup.array(),
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

    const moduleId = request.params.idModule;
    try {
      ObjectId(moduleId);
    } catch (error) {
      return response.status(400).json({ error });
    }
    const moduleExists = await Modules.findOne({
      _id: ObjectId(moduleId),
    }).exec();
    if (!moduleExists) {
      return response.status(400).json({ error: "Module Id does not exist" });
    }

    const { title, video_files, audio_files, text_files, practice_files } =
      request.body;

    try {
      await Classes.create({
        title,
        video_files,
        audio_files,
        text_files,
        practice_files,
        trailId,
        levelId,
        moduleId,
      });
    } catch (error) {
      return response.status(400).json({ error });
    }

    return response
      .status(201)
      .json({ message: "Class registered successfully" });
  }
}

export default new ClassesController();
