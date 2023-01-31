import React, { useEffect } from "react";
import "./EducationBox.scss";
import { SlGraduation } from "react-icons/sl";
import Aos from "aos";
import "aos/dist/aos.css";

function EducationBox() {
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
              <h4>Bachelor in Computer Science</h4>
              <p>Mansoura University</p>
              <p>2014-2015</p>
            </div>
            <div className="desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                magnam cumque velit sint cum? Dicta aut maxime ipsum repudiandae
                officiis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationBox;
