import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <FaLinkedin></FaLinkedin>
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub></FaGithub>
      </a>
      <a href="https://gmail.com" target="_blank">
        <CgMail></CgMail>
      </a>
    </div>
  );
};

export default HeaderSocials;
