const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const visitorLogger = require('./middleware/visitorLogger');
const contactRoutes = require('./routes/Contact');
const githubRoutes = require('./routes/github');
const leetcodeRoutes = require('./routes/leetcode');
const projectRoutes = require('./routes/projects');
const resumeRoutes = require('./routes/resume');

dotenv.config();
const app = express();

app.use(express.json());
app.use(visitorLogger); // logs every request

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/github', githubRoutes);
app.use('/api/leetcode', leetcodeRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/resume', resumeRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection failed:', err));
