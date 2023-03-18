import "../../styles/Footer/Footer.css";
import ListItem from "../Shared/ListItem";

const Footer: React.FC = () => {
  const symbols = ["lambda"];
  return (
    <footer className="main-footer">
      <ol>
        <ListItem title="&lambda;hnucamendi" isLink={false}></ListItem>
        <ListItem
          title="&lambda;Linkedin"
          link="https://www.linkedin.com/in/hnucamendi/"
          isLink={true}
          target="_blank"
        ></ListItem>
        <ListItem
          title="&lambda;GitHub"
          link="https://github.com/hnucamendi"
          isLink={true}
          target="_blank"
        ></ListItem>
      </ol>
    </footer>
  );
};

export default Footer;
