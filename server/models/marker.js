const mongoose = require('mongoose');

const markerSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  geocode: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Marker', markerSchema);
