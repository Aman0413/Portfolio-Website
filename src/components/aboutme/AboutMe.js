import React, { useEffect } from "react";
import "./AboutMe.scss";
import myImage from "../../assets/IMG_20201226_162614.jpg";
import backImg from "../../header.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 1300 });
  }, []);
  return (
    <div className="AboutMe" id="about">
      <div class="container" data-aos="fade-up">
        <div class="cards grid-row">
          <div class="card flex-row colmun">
            <div class="col-left card-image">
              <div class="card-bg-img">
                <img src={backImg} alt="card background image" />
              </div>
              <div class="profile-img">
                <img src={myImage} alt="profile" />
              </div>
            </div>
            <div class="col-right card-info">
              <div class="card-info-inner">
                <h2 className="heading-about">About Me</h2>
                <p className="desc" align="justify">
                  As a fullstack MERN developer, I bring expertise in both
                  front-end and back-end development to deliver comprehensive
                  and dynamic web solutions. My skills in MongoDB, ExpressJS,
                  ReactJS, and NodeJS have allowed me to create efficient and
                  user-friendly websites and applications. I am passionate about
                  using technology to solve problems and create a positive
                  impact, and I am always eager to learn and improve my skills.
                </p>

                <div className="bio-data">
                  <div className="fields flexItem ">
                    <span>Name</span>
                    <span>Date of Birth</span>
                    <span>Email</span>
                    <span>Phone</span>
                  </div>
                  <div className="fieldName flexItem ">
                    <span>Aman Verma</span>
                    <span>October 04, 2001</span>
                    <span>amanv7404@gmail.com</span>
                    <span>361236137</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
