import React, { useEffect } from "react";

import "./ProjectCard.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function ProjectCard(props) {
  useEffect(() => {
    Aos.init({ duration: 1300 });
  }, []);
  return (
    <div className="ProjectCard">
      <div className="card" data-aos="fade-up">
        <div className="image">
          <img src={props.img} className="card-img" alt="" />
        </div>
        <div className="card-body">
          <h1 className="card-title">{props.title}</h1>
          <p className="card-info">{props.discription}</p>

          <div className="btn-box">
            <a href={props.linklive}>
              <button className="card-btn">See Live</button>
            </a>
            <a href={props.linkcode}>
              <button className="card-btn">See Code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
