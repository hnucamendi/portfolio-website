import "../../styles/Footer/Footer.css";
import ListItem from "../Shared/ListItem";

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <ol>
        <ListItem title="Test" isLink={false}></ListItem>
      </ol>
    </footer>
  );
};

export default Footer;
