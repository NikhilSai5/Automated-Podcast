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

const DataSchemaModel = mongoose.model("Data", dataSchema);

module.exports = {
  DataSchemaModel,
};
