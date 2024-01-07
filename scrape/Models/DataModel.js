// dataModel.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  summarizedText: {
    type: String,
    required: true,
  },

});

const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;
