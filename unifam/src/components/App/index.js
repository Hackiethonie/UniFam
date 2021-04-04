import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import Footer from "../Footer";

import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import HomePage from "../Home"; 
import Project from "../Project";
import AboutPage from "../About";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";
import "../../index.css";

const App = () => (
  <Router>
    <div>
      <Navigation />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.PROJECT} component={Project} />
      <Route path={ROUTES.ABOUT} component={AboutPage} />

      <Footer />
    </div>
  </Router>
);

export default withAuthentication(App);
