import React from "react";
import SkillsCard from "./SkillsCard";
import "./experience.css";
import { skillsData } from "./skillsData.js";
import CenterMode from "./Card";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { GrServices } from "react-icons/gr";
import { SiGooglecloud } from "react-icons/si";
import { SiAwslambda } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { SiRabbitmq } from "react-icons/si";
import { FaSquareGitlab } from "react-icons/fa6";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Skills I have</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoLogoHtml5 className="experience__details-icon"></IoLogoHtml5>
              <h4>HTML</h4>
            </article>

            <article className="experience__details">
              <FaCss3Alt className="experience__details-icon"></FaCss3Alt>
              <h4>CSS</h4>
            </article>

            <article className="experience__details">
              <FaReact className="experience__details-icon"></FaReact>
              <h4>REACT</h4>
            </article>
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaJava className="experience__details-icon"></FaJava>
              <h4>JAVA</h4>
            </article>

            <article className="experience__details">
              <SiSpringboot className="experience__details-icon"></SiSpringboot>
              <h4>Springboot</h4>
            </article>

            <article className="experience__details">
              <SiSpring className="experience__details-icon"></SiSpring>
              <h4>Springcloud</h4>
            </article>

            <article className="experience__details">
              <GrServices className="experience__details-icon"></GrServices>
              <h4>Microservices</h4>
            </article>
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Cloud and Devops</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiGooglecloud className="experience__details-icon"></SiGooglecloud>
              <h4>GCP</h4>
            </article>

            <article className="experience__details">
              <SiAwslambda className="experience__details-icon"></SiAwslambda>
              <h4>AWS Lambda</h4>
            </article>

            <article className="experience__details">
              <FaDocker className="experience__details-icon"></FaDocker>
              <h4>Docker</h4>
            </article>

            <article className="experience__details">
              <SiKubernetes className="experience__details-icon"></SiKubernetes>
              <h4>Kubernetes</h4>
            </article>

            <article className="experience__details">
              <SiRabbitmq className="experience__details-icon"></SiRabbitmq>
              <h4>Rabbit MQ</h4>
            </article>

            <article className="experience__details">
              <FaSquareGitlab className="experience__details-icon"></FaSquareGitlab>
              <h4>Gitlab CI/CD</h4>
            </article>
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Database and Other Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoLogoHtml5 className="experience__details-icon"></IoLogoHtml5>
              <h4>MongoDB</h4>
            </article>

            <article className="experience__details">
              <FaCss3Alt className="experience__details-icon"></FaCss3Alt>
              <h4>Oracle</h4>
            </article>

            <article className="experience__details">
              <FaReact className="experience__details-icon"></FaReact>
              <h4>JUnit & Pact Tests</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
