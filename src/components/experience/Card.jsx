import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import ME from "../../assets/Me.png";

function CenterMode() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div className="container experience__container">
          <div className="experience__frontend">
            <div className="experience__content">
              <h3> Development</h3>
              <article className="experience__details">
                <IoLogoHtml5 className="experience__details-icon"></IoLogoHtml5>
                <h4>Title</h4>
              </article>
              <article className="experience__details">
                <FaCss3Alt className="experience__details-icon"></FaCss3Alt>
                <h4>T2</h4>
              </article>
              <article className="experience__details">
                <FaReact className="experience__details-icon"></FaReact>
                <h4>T3</h4>
              </article>
            </div>
          </div>
        </div>
        <div className="experience__frontend">
          <h3>2</h3>
        </div>
        <div className="experience__frontend">
          <h3>3</h3>
        </div>
      </Slider>
    </div>
  );
}

export default CenterMode;
