import { Schema, model, models } from "mongoose";
const defaultImageUrl = "/default-profile-image.png";
const UserSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
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
