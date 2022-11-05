import moongose from "mongoose";

const UserSchema = new moongose.Schema({
  name: {
    type: String,
    require: true,
  },
});

export const Users = moongose.model("Users", UserSchema);
