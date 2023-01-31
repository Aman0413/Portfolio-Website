import React, { useEffect } from "react";
import "./Education.scss";
import EducationBox from "./EducationBox";
import Aos from "aos";
import "aos/dist/aos.css";

function Education() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="Eduacation">
      <div className="container" data-aos="fade-up">
        <div className="heading">
          <h2>Education</h2>
        </div>
        <div className="box">
          <EducationBox />
          <EducationBox />
          <EducationBox />
          <EducationBox />
        </div>
      </div>
    </div>
  );
}

export default Education;
