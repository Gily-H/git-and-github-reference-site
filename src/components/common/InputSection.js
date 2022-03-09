import React from "react";

const InputSection = (props) => {
  return (
    <div className="input-section-container">
      <h3>{props.title}</h3>
      <p>{props.descirption}</p>
      <input placeholder="Enter command..."></input>
    </div>
  );
};

export default InputSection;
