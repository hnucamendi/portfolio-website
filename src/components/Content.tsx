import React, { PropsWithChildren } from "react"

const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

export default Content
