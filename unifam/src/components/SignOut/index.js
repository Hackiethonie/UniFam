import React from "react";

import { withFirebase } from "../Firebase";
import "./SignOutStyle.css";

const SignOutButton = ({ firebase }) => (
  <button class="signout-btn" type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
