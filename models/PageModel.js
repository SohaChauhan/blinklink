import { Schema, model, models } from "mongoose";
const PageSchema = new Schema({
  username: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: "",
  },
  bg_color: {
    type: String,
    default: "#FFFFFF",
  },
  bio: {
    type: String,
    default: "",
  },
  buttons: {
    type: Object,
    default: {},
  },
  links: {
    type: Object,
    default: [],
  },
  headers: {
    type: Object,
    default: [],
  },
});
export default models.Page || model("Page", PageSchema);
