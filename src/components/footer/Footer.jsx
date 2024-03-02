import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Ravi Kumar Pal
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#companies">Organisations</a>
        </li>
        <li>
          <a href="#qualifications">Qualifications & Certifications</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com" target="_blank">
          <FaLinkedin></FaLinkedin>
        </a>
        <a href="https://github.com" target="_blank">
          <FaGithub></FaGithub>
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Ravi Kumar Pal</small>
      </div>
    </footer>
  );
};

export default Footer;
