import React from "react";

import { AuthUserContext, withAuthorization } from "../Session";
import "./AboutStyle.css";

const AboutPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <div className="container">
        <div className="centered-content2">
          <h1 className="about-title">About this project</h1>
          <p className="about-content">
            Last year, Covid and working from home had a major impact on our
            health and wellbeing, in various ways unimaginable. One aspect that
            we found was impacted the most was the lack of social interaction
            and sense of community, especially for new students entering
            university for the first time.
          </p>
          <p className="about-content">
            That's why we've built UniFam - a website that aims to bring
            together students studying in the same university. In this
            community, people are able to come together to build meaningful
            connections and lasting memories captured in the creation of a
            project through teamwork.
          </p>
        </div>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AboutPage);
