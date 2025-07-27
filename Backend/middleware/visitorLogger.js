const VisitorLog = require('../models/VisitorLog');

const visitorLogger = async (req, res, next) => {
  try {
    await VisitorLog.create({
      ip: req.ip,
      userAgent: req.headers['user-agent'],
      path: req.originalUrl,
      timestamp: new Date()
    });
  } catch (err) {
    console.error('Visitor log failed:', err);
  }
  next();
};

module.exports = visitorLogger;
