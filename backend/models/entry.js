const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const EntryModel = mongoose.model('entry', EntrySchema);

module.exports = EntryModel;
