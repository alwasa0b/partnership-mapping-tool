import { Schema } from "mongoose";
import { nextDate } from "../lib/util";

export default new Schema({
  startingOn: { type: Date, default: Date.now },
  endingOn: { type: Date, default: nextDate(7) },
  followUpTimes: {
    type: Number,
    required: true
  },
  followUpInterval: {
    type: Number,
    required: true
  },
  followUpUnit: {
    type: String,
    enum: ["DAYS", "WEEKS"],
    required: true
  },
  questionnaire: [{ type: Schema.ObjectId, ref: "Questionnaire" }]
});
