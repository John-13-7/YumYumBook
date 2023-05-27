import React from "react";
import { StyledLanding } from "./Styles";
function Landing() {
  return (
    <StyledLanding>
      <div className="heading">
        <h2>Welcome to </h2>
        <h1 className="yyb">YumYumBook</h1>
      </div>
      <p>
        YumYumBook is a collection of customizable recipes that are free for all
        users
      </p>
      <p>Create and delete recipes:</p>
      <p>Lookup and edit recipes:</p>
    </StyledLanding>
  );
}
export default Landing;
