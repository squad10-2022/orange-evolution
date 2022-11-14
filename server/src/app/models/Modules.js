import moongose from "mongoose";

const ModulesSchema = new moongose.Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
    },
    levelId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default moongose.model("Modules", ModulesSchema);
