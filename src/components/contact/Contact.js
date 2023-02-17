import React, { useEffect } from "react";
import Email from "emailjs-com";
import "./Contact.scss";
import { MdEmail, MdCall } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const notify = () =>
    toast.success("Message Sent", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  function sendEmail(e) {
    e.preventDefault();
    Email.sendForm(
      "service_5qohjcx",
      "template_vi8j32n",
      e.target,
      "bAam4tLh5cF4N3EQX"
    ).then(
      (result) => {},
      (error) => {
        console.log(error);
      }
    );
    e.target.reset();
  }

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
            <form onSubmit={sendEmail}>
              <div className="contact-form">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                  />
                  <input
                    type="text"
                    placeholder="Your email address"
                    name="email"
                  />
                </div>
                <textarea
                  id=""
                  cols="55"
                  rows="10"
                  placeholder="Write your message"
                  name="msg"
                ></textarea>

                <span>
                  <button onClick={notify}>Send Message Now</button>
                  <ToastContainer />
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
