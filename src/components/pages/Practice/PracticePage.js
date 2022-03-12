import React from "react";
import "./Practice.css";

import { PracticeSnippets } from ".";

const PracticePage = () => {
  return (
    <div className="practice-container">
      <h2 className="practice-page-header">Practice</h2>
      <hr />
      <PracticeSnippets />
    </div>
  );
};

export default PracticePage;
