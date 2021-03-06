import { Schema } from "mongoose";

export default new Schema({
  firstname: String,
  lastname: String,
  email: String,
  title: String,
  questionnaire: { type: Schema.ObjectId, ref: "Questionnaire" }
});
