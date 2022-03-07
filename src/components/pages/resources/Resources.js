import React from "react";
import "./Resources.css";

import ResourceGroup from "./ResourceGroup";

const Resources = () => {
  return (
    <div className="resources-container">
      <h1>Resources</h1>

      <ResourceGroup
        title="Practice Git Commands"
        text="Walk through the process of creating a Git repository to committing changes to that repository"
        path="#"
        linkText="Practice Here"
      />

      <ResourceGroup
        title="Git Documentation"
        text="Read up on the Git documentation to gain more detailed information on how Git commands work"
        path="#"
        linkText="Documentation"
      />

      <ResourceGroup
        title="Other Useful Resources"
        text="A compiled list of several Git resources to make your life easier"
        path="#"
        linkText="Click Here"
      />
    </div>
  );
};

export default Resources;
