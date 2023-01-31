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
        <img src={props.img} className="card-img" alt="" />
        <div className="card-body">
          <h1 className="card-title">{props.title}</h1>
          <p className="card-info">{props.discription}</p>

          <button className="card-btn">See Project</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
