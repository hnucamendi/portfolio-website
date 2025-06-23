import React from "react"
import Style from "../styles/gridContainer"

interface Props {
  children: React.JSX.Element | React.JSX.Element[]
}

const GridContainer: React.FC<Props> = ({ children }) => {
  return (
    <Style>
      {children}
    </Style>
  )
}

export default GridContainer
