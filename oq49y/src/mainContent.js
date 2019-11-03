import React from "react";

function MainContent() {
  return (
    <div className="main-content">
      <h2>what i've worked on:</h2>
      <p>find my ux, web, and graphic design projects below.</p>
      <br />
      <div className="showcase">
        <div className="project-one">
          <h2 className="project-title">needless • ux</h2>
        </div>
        <div className="project-two">
          <h2 className="project-title">makerbase • ux</h2>
        </div>
        <div className="project-three">
          <h2 className="project-title">pass'eh • ux</h2>
        </div>
        <div className="project-four">
          <h2 className="project-title">waterloo cdsb • web</h2>
        </div>
      </div>
      <br />
      <h4>
        <b>see more ⟶</b>
      </h4>
    </div>
  );
}

export default MainContent;
