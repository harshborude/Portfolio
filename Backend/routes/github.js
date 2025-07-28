const express = require("express");
const router = express.Router();
const axios = require("axios");

// Replace this with your GitHub username
const GITHUB_USERNAME = "harshborude"; 

router.get("/github-stats", async (req, res) => {
  try {
    const { data } = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}`);
    
    res.json({
      name: data.name,
      public_repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      avatar_url: data.avatar_url,
      html_url: data.html_url,
      bio: data.bio
    });
  } catch (error) {
    console.error("GitHub API error:", error.message);
    res.status(500).json({ error: "Failed to fetch GitHub stats" });
  }
});

module.exports = router;
