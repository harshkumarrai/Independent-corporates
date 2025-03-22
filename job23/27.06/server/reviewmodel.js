const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  taskprovider: { type: String, required: true },
  taskworker: { type: String, required: true },
  rating: { type: Number, required: true },
});

module.exports = mongoose.model('Review', reviewSchema);
