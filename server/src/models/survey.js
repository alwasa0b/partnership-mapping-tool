import { Schema } from "mongoose";
import bucket from "./bucket";
import target from "./target";
import organization from "./organization";

import schedule from "./schedule";

//todo: validation.
const survey = Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    schedule: {
      type: schedule
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
      type: [organization],
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
  const scheduleSchema = this.model("Schedule");
  const schedule = new scheduleSchema(doc.schedule);
  await schedule.save();

  await doc.targets.forEach(async target => {
    const questionnaire = new questionnaireSchema({
      questions: doc.organizations,
      schedule: schedule._id,
      survey: doc._id,
      answers: doc.buckets.reduce((o, n) => ({ ...o, [n.code]: [] }), {})
    });
    target.questionnaire = questionnaire._id;
    await questionnaire.save();
  });
});

export default survey;
