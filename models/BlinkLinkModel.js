import { Schema, model, models } from "mongoose";
const BlinkLinkSchema = new Schema({
  type: String,
  page: String,
  uri: String,
});
export default models.BlinkLink || model("BlinkLink", BlinkLinkSchema);
