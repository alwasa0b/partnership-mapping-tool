import { Schema } from "mongoose";

export default new Schema({
  email: String,
  questionnaire: { type: Schema.ObjectId, ref: "Questionnaire" }
});
