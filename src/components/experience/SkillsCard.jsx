import React from "react";
import "./experience.css";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const SkillsCard = (props) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>{props.category} Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <IoLogoHtml5 className="experience__details-icon"></IoLogoHtml5>
            <h4>{props.skills.skills[0].title}</h4>
          </article>

          <article className="experience__details">
            <FaCss3Alt className="experience__details-icon"></FaCss3Alt>
            <h4>{props.skills.skills[1].title}</h4>
          </article>

          <article className="experience__details">
            <FaReact className="experience__details-icon"></FaReact>
            <h4>{props.skills.skills[2].title}</h4>
          </article>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
