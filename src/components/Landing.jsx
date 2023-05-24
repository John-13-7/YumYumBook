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
        YumYumBook is an open-source api for everyone to use. 
      </p>
      <p>
        Feel free to take a look around. There's no hidden costs,
        and we have recipes for all, vegans, vegetarians, pescatarians, everyone!
      </p>
    </StyledLanding>
  );
}
export default Landing;
