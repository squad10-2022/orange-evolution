import moongose from "mongoose";
import bcrypt from "bcrypt";
// bhbdhjc
const UserSchema = new moongose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    admin: {
      type: Boolean,
      require: true,
      default: false,
    },
    classes_done: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", function (next) {
  return bcrypt
    .genSalt(10)
    .then((salt) =>
      bcrypt.hash(this.password, salt).then((hash) => {
        this.password = hash;
        next();
      })
    )
    .catch(next);
});

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

export default moongose.model("Users", UserSchema);
