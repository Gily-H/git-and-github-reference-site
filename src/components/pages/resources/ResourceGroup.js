import React from "react";
import { NavItem, TextSection } from "../../common";

const ResourceGroup = (props) => {
  return (
    <section className="resource-group-container">
      <TextSection title={props.title} text={props.text} />
      <NavItem path={props.path} text={props.linkText} />
    </section>
  );
};

export default ResourceGroup;
