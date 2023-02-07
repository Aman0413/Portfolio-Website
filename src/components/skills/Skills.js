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
            <h3>Express.js/Node.js</h3>
            <h4>80%</h4>
            <span class="skill-bar"></span>
            <span class="fill-bar first"></span>
          </div>

          <div class="skill" data-aos="fade-right">
            <h3>React</h3>
            <h4>85%</h4>
            <span class="skill-bar"></span>
            <span class="fill-bar second"></span>
          </div>
        </div>

        <div className="skill-box">
          <div class="skill" data-aos="fade-right">
            <h3>JavaScript</h3>
            <h4>80%</h4>
            <span class="skill-bar"></span>
            <span class="fill-bar third"></span>
          </div>

          <div class="skill" data-aos="fade-right">
            <h3>Database</h3>
            <h4>80%</h4>
            <span class="skill-bar"></span>
            <span class="fill-bar fourth"></span>
          </div>
        </div>

        <div className="skill-box">
          <div class="skill" data-aos="fade-right">
            <h3>Git/Github</h3>
            <h4>80%</h4>
            <span class="skill-bar"></span>
            <span class="fill-bar fifth"></span>
          </div>

          <div class="skill" data-aos="fade-right">
            <h3>HTML/CSS</h3>
            <h4>95%</h4>
            <span class="skill-bar"></span>
            <span class="fill-bar six"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
