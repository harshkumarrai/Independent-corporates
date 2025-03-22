
const mongoose = require('mongoose');

const msgSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Dev' },
  fullname: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Msg', msgSchema);
