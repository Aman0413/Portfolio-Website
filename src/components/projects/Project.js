import React, { useEffect } from "react";
import ProjectCard from "../projectCard/ProjectCard";
import "./Project.scss";
import firstProjectImg from "../../assets/Screenshot 2023-02-07 at 2.24.53 PM.png";
import secondProjectImg from "../../assets/weather.png";
import thirdProjectImg from "../../assets/news.png";
import fourthProjectImg from "../../assets/Screenshot 2023-02-18 at 4.03.37 PM.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Project() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div className="Project" id="projects">
      <div className="main">
        <h2>Projects</h2>

        <div className="container">
          <ProjectCard
            img={firstProjectImg}
            title={"Portfolio"}
            discription={
              "Built using React, the site provides a user-friendly and interactive platform to present your work. React's ability to handle complex UI elements and dynamic updates makes it an excellent choice for creating a modern and engaging portfolio."
            }
            linkcode={"https://github.com/Aman0413/Portfolio-Website"}
          />
          <ProjectCard
            img={secondProjectImg}
            title={"Weather"}
            discription={
              "A live weather site is a web application that provides real-time weather information to its users. The site is built with a combination of technologies, including a front-end framework such as React, and APIs to access current weather data from a reliable source. "
            }
            linklive={"https://aweathersite.netlify.app/"}
            linkcode={"https://github.com/Aman0413/Weather-Website"}
          />
          <ProjectCard
            img={thirdProjectImg}
            title={"News"}
            discription={
              "A news site is a web platform that provides up-to-date information and news articles on various topics to its users. The site is built with a combination of technologies, including a front-end framework such as React, and APIs. "
            }
            linklive={"https://youtu.be/vcCg4bwPIvI"}
            linkcode={"https://github.com/Aman0413/News-Website"}
          />
          <ProjectCard
            img={fourthProjectImg}
            title={"Ask ?"}
            discription={
              "A query based site is a web platform that provides up-to-date information to its users. The site is built with a combination of technologies, including a front-end framework such as React, and Open AI APIs. "
            }
            linklive={"https://youtu.be/umh1Ac5oXC4"}
            linkcode={"https://github.com/Aman0413/Ask-me-anything"}
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
