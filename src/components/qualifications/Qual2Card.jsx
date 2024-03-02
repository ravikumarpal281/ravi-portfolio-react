import React from "react";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Qual2Card = (props) => {
  return (
    <swiper-slide key={props.index} className="qualifications__container">
      <div className="card">
        <h5 className="card-title">{props.title}</h5>
        <h3 className="card-description">{props.stream}</h3>
        <h3 className="card-description">{props.year}</h3>
      </div>
    </swiper-slide>
  );
};

export default Qual2Card;
