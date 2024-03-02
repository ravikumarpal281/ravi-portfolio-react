import React from "react";
import "./nav.css";
import { TiHomeOutline } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <TiHomeOutline></TiHomeOutline>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaRegUser></FaRegUser>
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        lassName={activeNav === "#experience" ? "active" : ""}
      >
        <FaBookOpen></FaBookOpen>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        lassName={activeNav === "#contact" ? "active" : ""}
      >
        <MdContactPhone></MdContactPhone>
      </a>
    </nav>
  );
};

export default Nav;
