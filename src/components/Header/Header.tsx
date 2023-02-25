import { useState } from "react";
import "./header.css";
import ListItem from "./ListItem";

const Header: React.FC = () => {
  return (
    <nav className="main-nav">
      <ol>
        <ListItem title="Home" link="#home"></ListItem>
        <ListItem title="Projects" link="#projects"></ListItem>
        <ListItem title="About Me" link="#about-me"></ListItem>
        <ListItem
          title="hnucamendi"
          link="#home"
          className="align-right"
        ></ListItem>
      </ol>
    </nav>
  );
};

export default Header;
