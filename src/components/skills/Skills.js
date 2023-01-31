import React, { useEffect } from "react";
import "./Skills.scss";

import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="Skills">
      <div class="container">
        <h1>Skills</h1>
        <div className="skill-box">
          <div class="skill" data-aos="fade-right">
            <h3>JavaScript</h3>
            <h4>70%</h4>
            <span class="skill-bar"></span>
            <span class="fill-bar javascript"></span>
          </div>

          <div class="skill" data-aos="fade-right">
            <h3>CSS</h3>
            <h4>85%</h4>
            <span class="skill-bar"></span>
            <span class="fill-bar css"></span>
          </div>
        </div>

        <div className="skill-box">
          <div class="skill" data-aos="fade-right">
            <h3>JavaScript</h3>
            <h4>70%</h4>
            <span class="skill-bar"></span>
            <span class="fill-bar javascript"></span>
          </div>

          <div class="skill" data-aos="fade-right">
            <h3>CSS</h3>
            <h4>85%</h4>
            <span class="skill-bar"></span>
            <span class="fill-bar css"></span>
          </div>
        </div>

        <div className="skill-box">
          <div class="skill" data-aos="fade-right">
            <h3>JavaScript</h3>
            <h4>70%</h4>
            <span class="skill-bar"></span>
            <span class="fill-bar javascript"></span>
          </div>

          <div class="skill" data-aos="fade-right">
            <h3>CSS</h3>
            <h4>85%</h4>
            <span class="skill-bar"></span>
            <span class="fill-bar css"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
