import React from "react";
import "./InputSection.css"

const InputSection = (props) => {
  return (
    <div className="input-section-container">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <input placeholder="Enter command..."></input>
    </div>
  );
};

export default InputSection;
