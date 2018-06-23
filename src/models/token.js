const mongoose = require("mongoose");
import { getUid } from "../lib/util";

const nextDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 30);
  return date;
};

const tokenSchema = new mongoose.Schema({
  oauth_token: { type: String },
  user_id: { type: mongoose.Schema.ObjectId, ref: "User" },
  expires: {
    type: Date,
    default: nextDate
  },
  scope: { type: String }
});

tokenSchema.methods.refresh = function(done) {
  this.expires = nextDate();
  this.oauth_token = getUid(256);
  this.save();
  done(this);
};

export default tokenSchema;
