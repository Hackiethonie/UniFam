import "./FooterStyle.css";
import { withFirebase } from "../Firebase";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/Hackiethonie/UniFam">
        <i class="fab fa-github"></i>
      </a>
      <p className="footer">✨ Copied-From-Stack-Overflow ✨</p>
    </footer>
  );
};

export default withFirebase(Footer);
