import React from "react";

const TextSection = (props) => {
  return (
    <div className={props.className}>
      <h2>{props.title}</h2>
      <hr />
      <p>{props.text}</p>
    </div>
  );
};

export default TextSection;
