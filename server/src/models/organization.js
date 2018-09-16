import { Schema } from "mongoose";

export default new Schema({
  code: String,
  name: String,
  questionnaire: { type: Schema.ObjectId, ref: "Questionnaire" }
});
