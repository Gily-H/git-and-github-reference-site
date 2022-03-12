import React from "react";

import { InputSection } from "../../common";
import { GIT_PRACTICE } from "./practiceInfo/GIT_PRACTICE";

const PracticeSnippets = () => {
  const practiceSections = GIT_PRACTICE.map((section) => (
    <div key={section.id} className="snippet-container">
      <img src={section.image} alt="terminal-snippet" />
      <InputSection title={section.title} description={section.description} />
    </div>
  ));

  return practiceSections;
};

export default PracticeSnippets;
