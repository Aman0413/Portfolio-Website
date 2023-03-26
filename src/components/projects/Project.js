import React, { useEffect } from "react";
import ProjectCard from "../projectCard/ProjectCard";
import "./Project.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProject } from "../redux/slices/projectSlices";

function Project() {
  const disptach = useDispatch();
  const state = useSelector((state) => state.project);

  useEffect(() => {
    Aos.init({ duration: 1200 });
    disptach(fetchProject());
  }, []);

  if (state.isLoading) {
    return (
      <div class="three-body">
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
      </div>
    );
  }
  return (
    <div className="Project" id="projects">
      <div className="main">
        <h2>Projects</h2>
        <div className="container">
          {state.data &&
            state.data.result.map((e) => {
              // console.log(e);
              return (
                <ProjectCard
                  img={e.image.url}
                  title={e.projectName}
                  discription={e.projectDesc}
                  linklive={e.live}
                  linkcode={e.code}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Project;
