const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const contactRoute = require('./routes/Contact');
const githubStats = require('./routes/github');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON body

app.use('/api/contact', contactRoute);
// app.use("/api", githubStats);

app.get('/api/github-stats', async (req, res) => {
  const { username } = req.query;
  try {
    const response = await axios.get(`https://github-contributions-api.jogruber.de/v4/${username}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch GitHub data' });
  }
});

app.get('/api/leetcode/profile/harsh_borude11', async (req, res) => {
  const username = req.params.username;
  try {
    const response = await axios.get(`https://leetcode-stats-api.herokuapp.com/${username}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch LeetCode profile data' });
  }
});



const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

 mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection failed:', err));
