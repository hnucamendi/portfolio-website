import React from "react"
import Style from "../styles/footer"

const Footer: React.FC = () => {
  return (
    <Style>
      <div className="footer">
        <ol>
          <li>
            <a href="https://github.com/hnucamendi/" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/hnucamendi/" target="_blank">
              LinkedIn
            </a>
          </li>
        </ol>
      </div>
    </Style>
  )
}

export default Footer;
