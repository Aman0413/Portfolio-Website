import "./App.css";
import AboutMe from "./components/aboutme/AboutMe";
import Education from "./components/education/Education";

import Navbar from "./components/Navbar/Navbar";
import React, { useEffect } from "react";
import Project from "./components/projects/Project";
import Skills from "./components/skills/Skills";

import Aos from "aos";
import "aos/dist/aos.css";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div data-aos="fade-down">
      <Navbar />
      <AboutMe />
      <Project />
      <Education />
      <Skills />
      <Contact />
      <Footer />

      
    </div>
  );
}

export default App;
