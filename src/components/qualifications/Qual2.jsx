import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Qual2Card from "./Qual2Card";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import "./qualifications.css";
register();

const Qual2 = () => {
  const swiperElRef = useRef(null);
  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);
  const qualificationData = [
    {
      title: "Bachelor of Technology",
      stream: "Computer Science",
      year: "2007-2011",
      certificate: "abc.com",
    },
    {
      title: "Cloud Developer",
      stream: "GCP - Associate Cloud Engineer",
      year: "2021",
      certificate: "abc.com",
    },
    {
      title: "Cloud Architect",
      stream: "GCP: PCA",
      year: "2023",
      certificate: "abc.com",
    },
  ];
  return (
    <section id="qualifications">
      <h5>My Qualifications and Certifications</h5>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        pagination="true"
        className="qualifications__container"
      >
        {qualificationData.map(
          ({ title, stream, year, certificate }, index) => {
            return (
              <Qual2Card
                title={title}
                stream={stream}
                year={year}
                certificate={certificate}
                className="qualification__item"
              ></Qual2Card>
            );
          }
        )}
      </swiper-container>
    </section>
  );
};

export default Qual2;
