import React from "react";
import{StyledLanding} from "./Styles";
function Landing() {
  return (
    <StyledLanding>
      <div className="heading">
        <h2>Welcome to </h2>
        <h1 className="yyb">YumYumBook</h1>
      </div>
      <p>
        YumYumBook is an open-source api for everyone to use. No discrimmination
        here, no Ronald Reagan or Richard Nixon here!
      </p>
      <p>
        Feel free to take a look around. There's no hidden costs,
        environmentally safe, and Vegan.
      </p>
    </StyledLanding>
  );
}
export default Landing;
