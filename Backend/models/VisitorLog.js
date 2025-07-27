const mongoose = require('mongoose');

const visitorLogSchema = new mongoose.Schema({
  ip: String,
  userAgent: String,
  path: String,
  timestamp: Date,
});

module.exports = mongoose.model('VisitorLog', visitorLogSchema);
