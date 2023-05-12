import React from "react";
import styled from "styled-components";
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

const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 25px;

  .heading {
    display: inline-block;
  }
  h1 {
    display: inline-block;
    font-family: "Red Hat Display", sans-serif;
    font-size: 3rem;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
      1px 1px 0 black;
  }
  h2 {
    font-family: "Red Hat Display", sans-serif;
    font-size: 3rem;
    display: inline-block;
  }
  p {
    font-family: "Open-sans", sans-serif;
    font-size: 1.5rem;
  }
  .yyb {
    display: inline-block;
    font-size: 3.5rem;
    font-family: "Lobster", cursive;
    color: orange;
    margin-left: 10px;
  }
`;
export default Landing;
