import React, { useState } from "react";
import Style from "../styles/header";
import Navigation from "./Navigation";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Style>
      <div className="header-content">
        <span className="logo" onClick={scrollToTop}>
          Harold Nucamendi
        </span>
        <Navigation
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
    </Style>
  );
};

export default Header;
