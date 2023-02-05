import React, { useEffect } from "react";
import "./Footer.scss";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="Footer">
      <div className="container">
        <h2 data-aos="fade-up">Follow Me</h2>
        <div className="wrapper" data-aos="fade-up">
          <a
            href="https://www.linkedin.com/in/aman-verma-1a459020b"
            target="_blank">
            <div class="icon linkeddin">
              <div class="tooltip">Linkeddin</div>
              <span>
                <FaLinkedinIn className="logo" />
              </span>
            </div>
          </a>

          <a href="https://github.com/Aman0413" target="_blank">
            <div class="icon github">
              <div class="tooltip">Github</div>
              <span>
                <BsGithub className="logo" />
              </span>
            </div>
          </a>

          <a href="https://www.instagram.com/being_aman_o4/" target="_blank">
            <div class="icon instagram">
              <div class="tooltip">Instagram</div>
              <span>
                <BsInstagram className="logo" />
              </span>
            </div>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100013954685307&mibextid=ZbWKwL"
            target="_blank">
            <div class="icon facebook">
              <div class="tooltip">Facebook</div>
              <span>
                <ImFacebook className="logo" />
              </span>
            </div>
          </a>

          <a
            href="https://twitter.com/AmanVer95261110?t=pNxJKBe7TZk5WbXAM3iHEw&s=09"
            target="_blank">
            <div class="icon twitter">
              <div class="tooltip">Twitter</div>
              <span>
                <BsTwitter className="logo" />
              </span>
            </div>
          </a>
        </div>
        <span className="copyright">
          <p>Copyright © {new Date().getFullYear()} All rights reserved |</p>
          <p> Made by Aman </p>
        </span>
      </div>
    </div>
  );
}

export default Footer;
