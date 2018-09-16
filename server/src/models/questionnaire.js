import { Schema } from "mongoose";

export default new Schema({
  questions: [String],
  answers: {
    type: Map,
    of: [String]
  },
  completed: { type: Boolean, default: false },
  started: { type: Boolean, default: false },
  survey: { type: Schema.ObjectId, ref: "Survey" },
  schedule: { type: Schema.ObjectId, ref: "Schedule" }
});
