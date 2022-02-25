import React from "react";
import "../styles/Presentation.css"

const Presentation = () => {
  return (
    <>
      <div id="root">
        <div className="presentation">
          <iframe
            className="presentation-iframe"
            loading="lazy"
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE5VPkbn7U&#x2F;view?embed"
            allowFullScreen="allowfullscreen"
            title="git/github presentation"
            allow="fullscreen"></iframe>
        </div>
        <a
          href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE5VPkbn7U&#x2F;view?utm_content=DAE5VPkbn7U&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
          target="_blank"
          rel="noreferrer">
          Slidedeck
        </a>
      </div>
    </>
  );
};

export default Presentation;
