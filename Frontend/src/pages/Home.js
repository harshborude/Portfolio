import React, { useState } from "react";
import axios from "axios";
import "../styles/Home.css";
import homeMain from "../assets/home-main.svg";
import avatar from "../assets/avatar.svg";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Home = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="home-container">
      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <h1>Hello, I'm <span className="highlight">Harsh</span></h1>
          <p>Web Developer • Problem Solver • Tech Enthusiast</p>
        </div>
        <img src={homeMain} alt="Hero" className="hero-image" />
      </section>

      {/* About */}
      <section className="about">
        <img src={avatar} alt="Avatar" className="avatar" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a passionate frontend developer skilled in React, Node.js, and modern web
            technologies. I love building fast, responsive websites with clean UI and intuitive UX.
          </p>
        </div>
      </section>

      {/* Socials */}
      <section className="socials">
        <h2>Connect with me</h2>
        <div className="icons">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
          <a href="mailto:your@email.com"><AiOutlineMail /></a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
          <button type="submit">Send Message</button>
          <p className="status">{status}</p>
        </form>
      </section>
    </div>
  );
};

export default Home;
