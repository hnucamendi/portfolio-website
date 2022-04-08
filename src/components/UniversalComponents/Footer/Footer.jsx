import React, { useState } from "react";
import Axios from "axios";

const Footer = ({ scrolled }) => {
  const [fName, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  const handleForm = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8000/form", {
      userName: fName,
      userEmail: email,
      userMessage: message,
    })
      .then(() => {
        alert("success");
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <section className="links-content" id="links">
      <div className="parallax parallax-links_img"></div>
      <h1>Lets talk to eachother</h1>
      <div className="link-section">
        <a
          href="https://github.com/ArriolaHarold2001"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/harold-arriola-nucamendi-b6586017b/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <form className="contact-form">
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="form-01"
          required
          onChange={(e) => {
            setFName(e.target.value);
          }}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="form-02"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <textarea
          className="form-03"
          placeholder="Message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>

        <button className="submit-btn" onClick={handleForm}>
          Submit
        </button>
      </form>
      <div className="scroll-up" id={`${scrolled ? "" : "hidden"}`}>
        <button className="scroll-up_btn" onClick={handleScrollToTop}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="chevron-up"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Footer;
