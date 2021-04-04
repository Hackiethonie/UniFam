import React from "react";

import { AuthUserContext, withAuthorization } from "../Session";
import "./AboutStyle.css";

const AboutPage = () => (
  <div className="container">
    <div className="centered-content2">
      <h1 className="about-title">Why UniFam?</h1>
      <p className="about-content">
        Last year, Covid and working from home had a major impact on our health
        and wellbeing, in various ways unimaginable. One aspect that we found
        was impacted the most was the
        <span class="highlight"> lack of social interaction</span> and{" "}
        <span class="highlight">sense of community</span> when WFH, especially
        for new students entering university for the first time.
      </p>
      <p className="about-content">
        That's why we've built UniFam - a website that aims to bring together{" "}
        <span class="highlight"> students </span>studying in the same
        university. In this community, people are able to come together to
        buildmeaningful connections and lasting memories, captured in the{" "}
        <span class="highlight"> creation of a project</span> through teamwork.
      </p>
    </div>
  </div>
);

export default AboutPage;
