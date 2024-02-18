const mongoose = require("mongoose");

const userProfile = new mongoose.Schema({
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  nickname: {
    type: String,
  },
  picture: {
    type: String,
  },
  sub: {
    type: String,
  },
  updated_at: {
    type: String,
  },
});

const userProfileModel = mongoose.model("userProfile", userProfile);

module.exports = {
  userProfileModel,
};
