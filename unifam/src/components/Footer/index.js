import "./FooterStyle.css";
import { withFirebase } from "../Firebase";

const Footer = () => {
  return (
    <footer>
      <p>icons</p>
      <p className="footer">Copied-From-Stack-Overflow</p>
    </footer>
  );
};

export default withFirebase(Footer);
