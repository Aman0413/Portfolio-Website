import React, { useEffect } from "react";
import "./EducationBox.scss";
import { SlGraduation } from "react-icons/sl";
import Aos from "aos";
import "aos/dist/aos.css";

function EducationBox({ course, venue, year, desc }) {
  useEffect(() => {
    Aos.init({ duration: 1300 });
  }, []);
  return (
    <>
      <div className="block">
        <div className="main-container" data-aos="fade-up">
          <div className="left-part">
            <div className="iconCon">
              <SlGraduation className="icon" />
            </div>
          </div>
          <div className="right-part">
            <div className="course">
              <h4>{course}</h4>
              <p className="bold">{venue}</p>
              <p>{year}</p>
            </div>
            <div className="desc">
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationBox;
