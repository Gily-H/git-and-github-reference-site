import React from "react";

import { GIT_PRACTICE } from "./practiceInfo/GIT_PRACTICE";
import { PracticeSnippet } from ".";

const PracticePage = () => {
  return (
    <div className="practice-container">
      <h2>Practice</h2>
      <PracticeSnippet />
      <PracticeSnippet />
      <PracticeSnippet />
      <PracticeSnippet />
    </div>
  );
};

export default PracticePage;
