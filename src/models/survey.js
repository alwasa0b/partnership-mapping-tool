import { Schema } from "mongoose";
import bucket from "./bucket";
import target from "./target";
import { nextDate } from "../lib/util";

//todo: validation.
const survey = Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
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
    message: {
      type: String,
      required: true
    },
    source: {
      type: String,
      required: true
    },
    targets: {
      type: [target],
      required: true,
      validate: {
        validator: v => v.length > 0,
        message: "targets are required"
      }
    },
    organizations: {
      type: [String],
      required: true,
      validate: {
        validator: v => v.length > 0,
        message: "organizations are required"
      }
    },
    buckets: {
      type: [bucket],
      required: true,
      validate: {
        validator: v => v.length > 0,
        message: "buckets are required"
      }
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

survey.set("toJSON", {
  virtuals: true
});

survey.pre("save", async function() {
  const doc = this;
  const questionnaireSchema = this.model("Questionnaire");
  await doc.targets.forEach(async target => {
    const questionnaire = new questionnaireSchema({
      questions: doc.organizations,
      answers: doc.buckets.reduce((o, n) => ({ ...o, [n.code]: [] }), {})
    });
    target.questionnaire = questionnaire._id;
    await questionnaire.save();
  });
});

export default survey;
