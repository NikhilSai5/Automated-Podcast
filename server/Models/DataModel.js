// dataModel.js
const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  url: {
    type: String,
  },
  heading: {
    type: String,
  },
  summarizedText: {
    type: String,
  },
  audioUrl: {
    type: String,
  },
});

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

const DataModel = mongoose.model("Data", dataSchema);
const userProfileModel = mongoose.model("userProfile", userProfile);

module.exports = {
  DataModel,
  userProfileModel,
};
