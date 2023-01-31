import React from "react";
import "../Navbar/nav.css";
// import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "antd";
import Typewriter from 'typewriter-effect'


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
          <nav className="navbar">
            <a href="#" className="nav-branding">
              Aman
            </a>
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="#">Home</a>
              </li>
              <li className="nav-item">
                <a href="#">About</a>
              </li>
              <li className="nav-item">
                <a href="#">Portfolio</a>
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
            I am <span className="myName">Aman</span> Verma
          </h1>
          <div className="developer-skills">

              <Typewriter
              
         options={{
            autoStart:true,
            loop:true,
            delay:40,
            strings:[
               "Fullstack Developer",
               "Software Developer"
         ]
         }}/>
          </div>
          <span>
            <Button
              type="primary"
              shape="round"
              style={{ backgroundColor: "var(--primary-color)" }}
              size="large">
              Vist My Work
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
