const mongoose = require("mongoose");

const email = new mongoose.Schema({
  type: String
});

const survey = mongoose.Schema(
  {
    name: String,
    startingOn: { type: Date, default: Date.now },
    endingOn: { type: Date, default: Date.now },
    email: email
  },
  { timestamps: { createdAt: "created_at" } }
);

survey.set("toJSON", {
  virtuals: true
});

export default survey;
