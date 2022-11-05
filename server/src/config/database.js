import mongoose from "mongoose";
import env from "../envfile";
export const dbConnect = () =>
  mongoose.connect(
    env.dbUrl,
    {
      useUnifiedTopology: true,
    },
    (err) =>
      err ? console.log({ error: err }) : console.log("MongoDB connected")
  );
