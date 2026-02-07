import React from "react";
import { SectionWrapper } from "../styles/section";

interface Props {
  id: string;
  children: React.ReactNode;
}

const Section: React.FC<Props> = ({ id, children }) => {
  return (
    <SectionWrapper id={id}>
      {children}
    </SectionWrapper>
  );
};

export default Section;
