import surveySchema from "./models/survey";
import userSchema from "./models/user";
import tokenSchema from "./models/token";
import mongoose from "mongoose";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const url = process.env.DB_URL;

const survey = mongoose.model("Survey", surveySchema);
const user = mongoose.model("User", userSchema);
const token = mongoose.model("Token", tokenSchema);

export default callback => {
  mongoose.connect(url);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => callback({ survey, user, token }));
};
