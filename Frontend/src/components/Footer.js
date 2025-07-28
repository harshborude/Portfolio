import React from "react";
import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:youremail@example.com">
          <FaEnvelope />
        </a>
      </div>
      <p className="footer-text">© {new Date().getFullYear()} Harsh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
