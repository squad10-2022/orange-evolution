import moongose from "mongoose";

const ClassesSchema = new moongose.Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
    },
    video_files: [
      {
        type: String,
      },
    ],
    audio_files: [
      {
        type: String,
      },
    ],
    text_files: [
      {
        type: String,
      },
    ],
    practice_files: [
      {
        type: String,
      },
    ],
    done: {
      type: Boolean,
      dafault: false,
    },
    trailId: {
      type: String,
      required: true,
    },
    levelId: {
      type: String,
      required: true,
    },
    moduleId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default moongose.model("Classes", ClassesSchema);
