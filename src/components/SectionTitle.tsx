import React from "react";
import { SectionTitleWrapper } from "../styles/section";

interface Props {
  children: React.ReactNode;
}

const SectionTitle: React.FC<Props> = ({ children }) => {
  return (
    <SectionTitleWrapper>
      <h2>{children}</h2>
    </SectionTitleWrapper>
  );
};

export default SectionTitle;
