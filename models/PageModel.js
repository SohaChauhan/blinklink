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
    default: [
      { key: "instagram", label: "instagram", URL: "", icons: "faInstagram" },
      { key: "threads", label: "threads", URL: "", icons: "faThreads" },
      { key: "facebook", label: "facebook", URL: "", icons: "faFacebook" },
      { key: "email", label: "e-mail", URL: "", icons: "faEnvelope" },
      { key: "youtube", label: "youtube", URL: "", icons: "faYoutube" },
      { key: "X", label: "X", URL: "", icons: "faXTwitter" },
      { key: "whatsapp", label: "whatsapp", URL: "", icons: "faWhatsapp" },
      { key: "snapchat", label: "snapchat", URL: "", icons: "faSnapchat" },
      { key: "discord", label: "discord", URL: "", icons: "faDiscord" },
      { key: "github", label: "github", URL: "", icons: "faGithub" },
      { key: "linkedin", label: "linkedin", URL: "", icons: "faLinkedin" },
      { key: "pinterest", label: "pinterest", URL: "", icons: "faPinterest" },
      { key: "spotify", label: "spotify", URL: "", icons: "faSpotify" },
      { key: "telegram", label: "telegram", URL: "", icons: "faTelegram" },
    ],
  },
  links: {
    type: Object,
    default: [],
  },
  button_color: {
    type: String,
    default: "#E5E5E5",
  },
  button_font_color: {
    type: String,
    default: "#000000",
  },
  font_color: {
    type: String,
    default: "#000000",
  },
  avatar_border_color: {
    type: String,
    default: "#000000",
  },
});
export default models.Page || model("Page", PageSchema);
