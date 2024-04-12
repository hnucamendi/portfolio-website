import React, { PropsWithChildren } from "react"

const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

export default Header
