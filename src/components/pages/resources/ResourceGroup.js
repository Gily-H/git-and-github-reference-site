import React from "react";
import { TextSection } from "../../common";

const ResourceGroup = (props) => {
  const links = props.links.map((link) => (
    <div>
      <a key={link.id} className="resource-link" href={link.path}>
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
