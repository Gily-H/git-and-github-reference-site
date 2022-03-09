import React from "react";
import { TextSection } from "../../common";

const ResourceGroup = (props) => {
  const links = props.links.map((link) => (
    <div key={link.id}>
      <a className="resource-link" href={link.path} target="_blank" rel="noreferrer">
        {link.linkText}
      </a>
    </div>
  ));

  return (
    <section className="resource-group-container">
      <TextSection title={props.title} text={props.text} />
      {links}
    </section>
  );
};

export default ResourceGroup;
