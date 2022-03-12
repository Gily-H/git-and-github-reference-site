import React from "react";
import "./Resources.css";

import { GIT_RESOURCES, GITHUB_RESOURCES } from "./resourceInfo";
import { ResourceGroup } from ".";

const ResourcesPage = () => {
  const mapResources = (resources) => {
    return resources.map((resource) => (
      <ResourceGroup key={resource.id} title={resource.title} text={resource.text} links={resource.links} />
    ));
  };

  const gitResources = mapResources(GIT_RESOURCES);
  const githubResources = mapResources(GITHUB_RESOURCES);

  return (
    <div className="resources-container">
      <h1>Resources</h1>
      <hr />
      <h2>Git Resources</h2>
      {gitResources}
      <h2>GitHub Resources</h2>
      {githubResources}
    </div>
  );
};

export default ResourcesPage;
