import moongose from "mongoose";

const TrailSchema = new moongose.Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
    },
    summary: [
      {
        type: String,
        require: true,
        trim: true,
      },
    ],
    number_of_classes: {
      type: Number,
      require: true,
      default: 0,
    },
    number_of_classes_done: {
      type: Number,
      require: true,
      default: 0,
    },
    evolution: {
      type: Number,
      require: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default moongose.model("Trails", TrailSchema);
