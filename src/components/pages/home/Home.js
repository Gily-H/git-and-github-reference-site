import React from "react";

import { TextSection } from "../../common";
import GIT_LOGO from "../../../images/Git-Icon.png";
import GITHUB_LOGO from "../../../images/GitHub-Icon.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="logo-container">
        <img className="git-logo" src={GIT_LOGO} alt="Git logo" />
        <span className="logo-link"></span>
        <img className="github-logo" src={GITHUB_LOGO} alt="GitHub logo" />
      </div>

      <TextSection
        className="home-section"
        title="What is Git?"
        text="Git is a Version-Control-Sytem (VCS) that allows you to manage your project at different states and stages in the development process"
      />
      <TextSection
        className="home-section"
        title="What is GitHub?"
        text="GitHub is a web application that allows you to store your projects in a remote repository"
      />
      <TextSection className="home-section" title="Why use Git and GitHub?" />
    </div>
  );
};

export default Home;
