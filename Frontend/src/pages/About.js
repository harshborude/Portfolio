import React, { useEffect, useState } from "react";
import "../styles/About.css";
import axios from "axios";

const About = () => {
  const [githubData, setGithubData] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/github-stats");
        setGithubData(res.data);
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      }
    };
    fetchGitHubStats();
  }, []);

  useEffect(() => {
    const fetchLeetcodeStats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/leetcode/profile/harsh_borude11");
        setLeetcodeData(res.data);
      } catch (error) {
        console.error("Error fetching Leetcode stats:", error);
      }
    };
    fetchLeetcodeStats();
  }, []);

  return (
    <div className="about-page">
      <section className="about-intro">
        <h1>About Me</h1>
        <p>I am Harsh Borude from Pune, Maharashtra.</p>
        <p>
          I am an undergraduate student at Indian Institute of Technology, Kharagpur...
        </p>
        <p>My other hobbies include:</p>
        <ul>
          <li>Football</li>
          <li>Writing Tech Blogs</li>
          <li>Watching and Making Movies</li>
          <li>Gaming</li>
        </ul>
      </section>

      {githubData && (
        <section className="about-github">
          <h2>GitHub Profile</h2>
          <div className="github-card">
            <img
              src={githubData.avatar_url}
              alt="GitHub Avatar"
              className="github-avatar"
            />
            <div className="github-info">
              <h3>{githubData.name}</h3>
              <p>{githubData.bio}</p>
              <p>Repos: {githubData.public_repos}</p>
              <p>Followers: {githubData.followers}</p>
              <p>Following: {githubData.following}</p>
              <a
                href={githubData.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </section>
      )}

      <section className="about-skills">
        <h2>Professional Skillset</h2>
        <div className="skill-list">
          <span>C++</span>
          <span>JavaScript</span>
          <span>Go</span>
          <span>Node.js</span>
          <span>React</span>
          <span>Solidity</span>
          <span>MongoDB</span>
          <span>Next.js</span>
          <span>Git</span>
          <span>Firebase</span>
          <span>Redis</span>
          <span>PostgreSQL</span>
          <span>Python</span>
          <span>Java</span>
        </div>
      </section>

      <section className="about-tools">
        <h2>Tools I use</h2>
        <div className="tool-list">
          <span>macOS</span>
          <span>VS Code</span>
          <span>Postman</span>
          <span>Slack</span>
          <span>Vercel</span>
        </div>
      </section>

      <section className="about-activity">
        <h2>Days I Code</h2>
        <p className="contribution">Aug Sep Oct Nov Dec Jan Feb Mar Apr May Jun Jul</p>
        <p>43 contributions in the last year</p>
        <div className="contribution-scale">
          <span>Less</span>
          <span>More</span>
        </div>
      </section>

      {leetcodeData && (
        <section className="about-leetcode">
          <h2>LeetCode Stats</h2>
          <div className="leetcode-card">
            <h3>{leetcodeData.username || "Harsh Borude"}</h3>
            <p>Total Solved: {leetcodeData.totalSolved}</p>
            <p>Easy: {leetcodeData.easySolved}</p>
            <p>Medium: {leetcodeData.mediumSolved}</p>
            <p>Hard: {leetcodeData.hardSolved}</p>
            <p>Ranking: #{leetcodeData.ranking}</p>
          </div>
        </section>
      )}

      <footer className="about-footer">
        <p>Copyright © 2025</p>
      </footer>
    </div>
  );
};

export default About;
