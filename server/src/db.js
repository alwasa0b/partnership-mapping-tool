import surveySchema from "./models/survey";
import userSchema from "./models/user";
import tokenSchema from "./models/token";
import questionnaireSchema from "./models/questionnaire";
import scheduleSchema from "./models/schedule";
import mongoose from "mongoose";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const url = process.env.DB_URL;

const survey = mongoose.model("Survey", surveySchema);
const user = mongoose.model("User", userSchema);
const token = mongoose.model("Token", tokenSchema);
const questionnaire = mongoose.model("Questionnaire", questionnaireSchema);
const schedule = mongoose.model("Schedule", scheduleSchema);

export default async callback => {
  mongoose.connect(url);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  await new Promise(resolve => db.once("open", resolve));
  callback({ mongo: db.db, survey, user, token, questionnaire, schedule });
  // const test = db.once;
  // db.once("open", () =>

  // );
};
