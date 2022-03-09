import React from "react";
import "./Resources.css";

import { GIT_RESOURCES } from "./resourceInfo/gitResources";
import ResourceGroup from "./ResourceGroup";

const Resources = () => {
  const resourceGroups = GIT_RESOURCES.map((resource) => (
    <ResourceGroup key={resource.id} title={resource.title} text={resource.text} links={resource.links} />
  ));

  return (
    <div className="resources-container">
      <h1>Resources</h1>
      {resourceGroups}
    </div>
  );
};

export default Resources;
