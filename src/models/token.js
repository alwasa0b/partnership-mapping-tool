const mongoose = require("mongoose");
import { getUid, nextDate } from "../lib/util";

const tokenSchema = new mongoose.Schema({
  oauth_token: { type: String },
  user_id: { type: mongoose.Schema.ObjectId, ref: "User" },
  expires: {
    type: Date,
    default: nextDate(30)
  },
  scope: { type: String }
});

tokenSchema.methods.refresh = function(done) {
  this.expires = nextDate(30);
  this.oauth_token = getUid(256);
  this.save();
  done(this);
};

export default tokenSchema;
