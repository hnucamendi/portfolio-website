import React from "react"
import Style from "../styles/footer"

const Footer: React.FC = () => {
  return (
    <Style>
      <div className="footer">
        <ol>
          <li>
            <a href="mailto:harold@hnucamendi.com">
              harold@hnucamendi.com
            </a>
          </li>
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
          <li>
            <a href="https://open.spotify.com/playlist/5AVzPx3wbzpg2fVRTQM4rD?si=e06b220bc1614956" target="_blank">
              Spotify
            </a>
          </li>
          <li>
            <a href="https://letterboxd.com/oldjimmy/" target="_blank">
              letterboxed
            </a>
          </li>
        </ol>
      </div>
    </Style>
  )
}

export default Footer;
