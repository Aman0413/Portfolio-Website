import React, { useEffect } from "react";
import ProjectCard from "../projectCard/ProjectCard";
import "./Project.scss";
import img from "../imgs/img-1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function Project() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div className="Project">
      <div className="main">
        <h2>Projects</h2>

        <div className="container">
          <ProjectCard
            img={img}
            title={"Project"}
            discription={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non laboriosam tenetur! Molestiae sapiente ut enim quibusdam asperiores nihil itaque, ex harum soluta, reiciendis illum?"
            }
          />
          <ProjectCard
            img={img}
            title={"Project"}
            discription={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non laboriosam tenetur! Molestiae sapiente ut enim quibusdam asperiores nihil itaque, ex harum soluta, reiciendis illum?"
            }
          />
          <ProjectCard
            img={img}
            title={"Project"}
            discription={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non laboriosam tenetur! Molestiae sapiente ut enim quibusdam asperiores nihil itaque, ex harum soluta, reiciendis illum?"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
