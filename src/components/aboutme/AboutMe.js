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
      <div className="container" data-aos="fade-up">
        <div className="cards grid-row">
          <div className="card flex-row colmun">
            <div className="col-left card-image">
              <div className="card-bg-img">
                <img src={backImg} alt="card background image" />
              </div>
              <div className="profile-img">
                <img src={myImage} alt="profile" />
              </div>
            </div>
            <div className="col-right card-info">
              <div className="card-info-inner">
                <h2 className="heading-about">About Me</h2>
                <p className="desc" align="justify">
                  My name is <span className="color">Aman Verma</span> and I am
                  a full-stack MERN developer. I have a strong background in
                  both front-end and back-end development, and have expertise in
                  the technologies used to build modern web applications. I have
                  a deep understanding of the MERN stack, which includes
                  MongoDB, Express.js, React, and Node.js, and I am skilled in
                  using these technologies to create robust, scalable, and
                  user-friendly web applications. With my extensive experience
                  in full-stack development and my passion for technology, I am
                  confident that I can deliver high-quality software solutions
                  that meet the needs of clients and users.
                </p>

                {/* <div className="bio-data">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
