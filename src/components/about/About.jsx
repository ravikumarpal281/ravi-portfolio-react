import React from "react";
import "./about.css";
import ME from "../../assets/Me.png";
import { FaAward } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { MdFolderSpecial } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"></FaAward>
              <h5>Experience</h5>
              <small>10+ Years</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon"></FaUsers>
              <h5>Organisations</h5>
              <small>4</small>
            </article>

            <article className="about__card">
              <MdFolderSpecial className="about__icon"></MdFolderSpecial>
              <h5>Projects</h5>
              <small>10</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
            repellendus magnam omnis fuga, nisi facere, aspernatur ducimus
            accusantium fugit doloremque, ut placeat tempora nemo consectetur
            facilis perspiciatis temporibus repellat recusandae.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
