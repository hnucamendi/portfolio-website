import React from "react";
import Style from "../styles/footer";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Style>
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-name">Harold Nucamendi</span>
          <span className="footer-copyright">© {currentYear}</span>
        </div>
        <ul className="footer-links">
          <li>
            <a href="mailto:harold@hnucamendi.com">Email</a>
          </li>
          <li>
            <a href="https://github.com/hnucamendi/" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/hnucamendi/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </Style>
  );
};

export default Footer;
