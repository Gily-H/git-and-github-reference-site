import React from "react";
import "./Resources.css";

import { GIT_RESOURCES } from "./resourceInfo/GIT_RESOURCES";
import { ResourceGroup } from ".";

const ResourcesPage = () => {
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

export default ResourcesPage;