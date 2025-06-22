import React from "react"
import Style from "../styles/card"

interface Props {
  children: React.JSX.Element
}

const Card: React.FC<Props> = ({ children }) => {
  return (
    <Style>
      {children}
    </Style>
  )
}

export default Card;
