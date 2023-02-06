import React from "react";
import "../Navbar/nav.css";
// import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "antd";
import Typewriter from "typewriter-effect";

function Navbar() {
  function handleClick() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  return (
    <div className="HeroBanner ">
      <div className="container">
        <header>
          <nav className="navbar" id="home">
            <a href="#" className="nav-branding">
              Aman
            </a>
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a href="#about">About</a>
              </li>
              <li className="nav-item">
                <a href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </header>

        <div className="headBanner">
          <h2 className="head">Hi!</h2>
          <h1 className="head">
            I'm <span className="myName">Aman</span> Verma
          </h1>
          <div className="developer-skills">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: ["Fullstack Developer", "Software Developer"],
              }}
            />
          </div>
          <span>
            <Button
              type="primary"
              shape="round"
              style={{ backgroundColor: "var(--primary-color)" }}
              size="large"
            >
              Download Resume
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
