import React from "react";

const Footer = ({ scrolled }) => {
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
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="form-02"
          required
        />
        <textarea className="form-03" placeholder="Message"></textarea>
        <button className="submit-btn">Submit</button>
      </form>
    </section>
  );
};

export default Footer;
