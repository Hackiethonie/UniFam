import React from "react";

import { AuthUserContext, withAuthorization } from "../Session";
import "./AboutStyle.css";

const AboutPage = () => (
  <div className="container">
    <div className="centered-content2">
      <h1 className="about-title">Why UniFam?</h1>
      <p className="about-content">
        Last year Covid-19, which resulted in everyone working from home, had a
        major impact on our health and wellbeing in various ways unimaginable.
        When the question, "What did we struggle with the most when WFH?" was
        brought up, we could all agree one important issue was a decrease in
        our
        <span class="highlight"> social wellbeing</span>.
      </p>
      <p className="about-content">
        The
        <span class="highlight"> lack of social interaction</span> and{" "}
        <span class="highlight">sense of community</span>, especially for new
        students, really resonated with us.
      </p>
      <p className="about-content">
        That's why we've built UniFam - a website that aims to{" "}
        <span class="highlight">bring together students </span>studying in the
        same university. In this community, people are able to come together as
        groups called 'families'. Families are able to build meaningful
        connections and lasting memories, captured in the{" "}
        <span class="highlight"> creation of a fun project</span>.
      </p>
      <p className="about-content">
        Whilst our website isn't finished, our ideas continue to grow and we
        hope in future to develop it further to include more exciting features
        that families can use to bond.
      </p>
    </div>
  </div>
);

export default AboutPage;
