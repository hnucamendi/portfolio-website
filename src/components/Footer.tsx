import React, { PropsWithChildren } from "react"
import { FooterDiv } from "../styles"

const Footer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

export default Footer
