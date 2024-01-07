// dataModel.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  url: {
    type: String,
    
  },
  summarizedText: {
    type: String,
    
  },

});

const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;
