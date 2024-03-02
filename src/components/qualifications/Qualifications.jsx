import React from "react";
import "./qualifications.css";
import QualificationCard from "./QualificationCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Qualifications = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="qualifications">
      <h5>My Qualifications and Certifications</h5>
      <div container qualifications__container>
        <article className="qualification__item">
          <div className="qualification__item-image"></div>
          <Carousel
            responsive={responsive}
            showDots={true}
            keyBoardControl={true}
            focusOnSelect={true}
          >
            <QualificationCard></QualificationCard>
            <QualificationCard></QualificationCard>
            <QualificationCard></QualificationCard>
          </Carousel>
        </article>
      </div>
    </section>
  );
};

export default Qualifications;
