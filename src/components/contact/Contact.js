import React, { useEffect } from "react";
import "./Contact.scss";
import { MdEmail, MdCall } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="Contact" id="Contact">
      <div className="main" data-aos="fade-up">
        <h2>Contact Me</h2>
        <div className="container" data-aos="fade-up">
          <div className="left-part">
            <div className="link-1">
              <div className=" circle">
                <a href="mailto: amanv7404@gmail.com">
                  <MdEmail className="icon-mail" />
                </a>
              </div>

              <div className="link-name">
                <h4>Email</h4>
                <p>amanv7404@gmail.com</p>
              </div>
            </div>

            <div className="link-1">
              <div className="wrapper circle">
                <li class="google">
                  <a href="#">
                    <MdCall className="icon-call" />
                  </a>
                </li>
              </div>

              <div className="link-name">
                <h4>Phone</h4>
                <p>+91-7225090867</p>
              </div>
            </div>
          </div>

          <div className="right-part">
            <div className="contact-form">
              <div>
                <input type="text" placeholder="Enter your name" />
                <input type="text" placeholder="Your email address" />
              </div>
              <textarea
                name=""
                id=""
                cols="55"
                rows="10"
                placeholder="Write your message"
              ></textarea>

              <span>
                <button>Send Message Now</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
