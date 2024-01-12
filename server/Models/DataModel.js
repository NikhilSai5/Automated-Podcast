// dataModel.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  url: {
    type: String,
  },
  heading : {
    type: String,
  },
  summarizedText: {
    type: String,
  },
  audioContent: {
    type: Buffer, 
  },

});

const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;