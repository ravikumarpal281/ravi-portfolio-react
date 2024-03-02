import React from "react";
import OrgCard from "./OrgCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Organisations = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  const companyList = [
    "Infosys Ltd",
    "Oottru Technologies",
    "Wipro Ltd",
    "YBS",
  ];
  return (
    <section id="companies">
      <h5>Companies I have worked for</h5>
      <Carousel
        responsive={responsive}
        showDots={true}
        keyBoardControl={true}
        focusOnSelect={true}
      >
        {companyList.map((company) => (
          <OrgCard company={company}></OrgCard>
        ))}
      </Carousel>
    </section>
  );
};

export default Organisations;
