import { Link } from "react-router-dom";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import "./Navstyle.css";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <ul className="navbar-auth">
    <li className="title">UNI<span className="titlep2"> FAM</span> </li>
    <li className="navitem">
      <Link to={ROUTES.HOME} className="link">
        Home
      </Link>
    </li>
    <li className="navitem">
      <Link to={ROUTES.PROJECT} className="link">
        Project
      </Link>
    </li>
    <li className="navitem">
      <Link to={ROUTES.ABOUT} className="link">
        About
      </Link>
    </li>
    <li className="sign-out">
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul className="navbar">
    <li className="navitem">
      <Link to={ROUTES.LANDING} className="link">
        UniFam
      </Link>
    </li>
    <li className="navitem">
      <Link to={ROUTES.SIGN_IN} className="link">
        Sign In
      </Link>
    </li>

    <li className="navitem">
      <Link to={ROUTES.ABOUT} className="link">
        About
      </Link>
    </li>
  </ul>
);

export default Navigation;
