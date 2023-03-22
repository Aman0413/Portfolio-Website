import React, { useEffect } from "react";
import ProjectCard from "../projectCard/ProjectCard";
import "./Project.scss";
import movieImg from "../../assets/movieProject.png";
import socialMediaImg from "../../assets/socialMedia.png";
import weatherImg from "../../assets/weatherProject.png";
import chatGptImg from "../../assets/chatGpt.png";
import newsImg from "../../assets/newsProject.png";
import portfolioImg from "../../assets/portfolio.png";
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
            img={socialMediaImg}
            title={"Social Media"}
            discription={
              "I have developed a full-stack social media web application using the MERN stack. This platform allows users to create an account, post updates, follow other users, and engage with their content through likes and comments. "
            }
            linklive={"https://social-media-client-rk7w.onrender.com/"}
            linkcode={"https://github.com/Aman0413/Social-Media-Server"}
          />
          <ProjectCard
            img={portfolioImg}
            title={"Portfolio"}
            discription={
              "Built using React, the site provides a user-friendly and interactive platform to present your work. React's ability to handle complex UI elements and dynamic updates makes it an excellent choice for creating a modern and engaging portfolio."
            }
            linklive={"https://amanvermas.netlify.app/"}
            linkcode={"https://github.com/Aman0413/Portfolio-Website"}
          />

          <ProjectCard
            img={movieImg}
            title={"Movie"}
            discription={
              "The user can enter a movie title in the search bar, and the app will display a list of matching movies, along with their posters and basic information such as release year and runtime. Application also allows users to view more detailed information about a particular movie. "
            }
            linklive={"https://movie-app-b7km.onrender.com/"}
            linkcode={"https://github.com/Aman0413/Movie-Web-App"}
          />
          <ProjectCard
            img={weatherImg}
            title={"Weather"}
            discription={
              "A live weather site is a web application that provides real-time weather information to its users. The site is built with a combination of technologies, including a front-end framework such as React, and APIs to access current weather data from a reliable source. "
            }
            linklive={"https://aweathersite.netlify.app/"}
            linkcode={"https://github.com/Aman0413/Weather-Website"}
          />
          <ProjectCard
            img={newsImg}
            title={"News"}
            discription={
              "A news site is a web platform that provides up-to-date information and news articles on various topics to its users. The site is built with a combination of technologies, including a front-end framework such as React, and APIs. "
            }
            linklive={"https://youtu.be/vcCg4bwPIvI"}
            linkcode={"https://github.com/Aman0413/News-Website"}
          />
          <ProjectCard
            img={chatGptImg}
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
