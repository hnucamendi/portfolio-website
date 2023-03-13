import "../../styles/Header/header.css";
import ListItem from "../Shared/ListItem";

const Header: React.FC = () => {
  return (
    <nav className="main-nav">
      <ol>
        <ListItem title="Home" link="#home" isLink={true}></ListItem>
        <ListItem title="Projects" link="#projects" isLink={true}></ListItem>
        <ListItem title="About Me" link="#about-me" isLink={true}></ListItem>
        <ListItem
          title="nucamendi"
          link="#home"
          className="align-right"
          isLink={true}
        ></ListItem>
      </ol>
    </nav>
  );
};

export default Header;
