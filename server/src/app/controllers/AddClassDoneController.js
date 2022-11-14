import { ObjectId } from "mongodb";
import Classes from "../models/Classes";
import Users from "../models/Users";

class AddClassDoneController {
  async update(request, response) {
    const classId = request.params.idClass;
    try {
      ObjectId(classId);
    } catch (error) {
      return response.status(400).json({ error });
    }
    const classExists = await Classes.findOne({
      _id: ObjectId(classId),
    }).exec();
    if (!classExists) {
      return response.status(400).json({ error: "Class Id does not exist" });
    }

    const userClassesDone = request.userClassesDone;

    if (userClassesDone.include(classId)) {
      return response
        .status(400)
        .json({ error: "Class Id has already been added" });
    }

    userClassesDone.push(classId);

    const userId = ObjectId(request.userId);

    try {
      await Users.where({ _id: userId }).update({
        classes_done: userClassesDone,
      });
    } catch (error) {
      return response.status(400).json({ error });
    }

    return response.status(201).json({ message: "User updated successfully" });
  }
}

export default new AddClassDoneController();
