import React, { useEffect } from "react";
import "./Education.scss";
import EducationBox from "./EducationBox";
import Aos from "aos";
import "aos/dist/aos.css";

function Education() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="Eduacation">
      <div className="container" data-aos="fade-up">
        <div className="heading">
          <h2>Education</h2>
        </div>
        <div className="box">
          <EducationBox
            course={" Bachelor of Computer Application (BCA) "}
            venue={"9 cgpa"}
            year={"2020-23"}
            desc={
              "During the course of my study, I acquired comprehensive knowledge of computer software and hardware, programming languages, databases, web development, and other related technologies. "
            }
          />
          <EducationBox
            course={"Diploma in Computer Application (DCA) "}
            venue={"80%"}
            year={"2018"}
            desc={
              "The course curriculum provided me with hands-on training in various software applications and programming languages, which gave me a strong foundation in computer science. "
            }
          />
          <EducationBox
            course={"Higher Secondary"}
            venue={"78%"}
            year={"2018"}
            desc={
              "I have successfully completed my higher secondary education with science background, which is the equivalent of 10+2 education system in India. "
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
