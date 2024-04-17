import { Schema, model, models } from "mongoose";
const defaultImageUrl = "/default-profile-image.png";
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  username: {
    type: String,
    // unique: true,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: defaultImageUrl,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export default models.User || model("User", UserSchema);
