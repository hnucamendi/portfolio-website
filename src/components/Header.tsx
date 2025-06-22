import React from "react"
import Style from "../styles/header"

interface Props {
  handlePointer: (e: React.MouseEvent<Element, MouseEvent>) => void
}

const Header: React.FC<Props> = ({ handlePointer }) => {
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
