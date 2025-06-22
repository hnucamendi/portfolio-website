import React from "react"
import Style from "../styles/header"

const Header: React.FC = () => {
  return (
    <Style>
      <div className="navbar sticky">
        <span className="lg">ニュカメンディ</span>
        <span>Nucamendi</span>
        <span className="lg">ニュカメンディ</span>
      </div>
    </Style>
  )
}

export default Header;
