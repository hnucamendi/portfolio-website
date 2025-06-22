import React from "react"
import Style from "../styles/container"

interface Props {
  children: React.JSX.Element | React.JSX.Element[]
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <Style>
      {children}
    </Style>
  )
}

export default Container;
