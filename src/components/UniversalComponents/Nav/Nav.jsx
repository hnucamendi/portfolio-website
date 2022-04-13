import React from "react";
import AdminLogin from "../../LandingPage/AdminLogin";

const Nav = () => {
  return (
    <>
      <div id="home"></div>
      <nav className="main-nav">
        <a href="#home">Home</a>
        <a href="#tech">Tech</a>
        <a href="#pd">Professional Development</a>
        <a href="#links">Links</a>
        <AdminLogin />
      </nav>
    </>
  );
};

export default Nav;
