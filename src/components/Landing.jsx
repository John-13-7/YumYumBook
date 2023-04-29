import React from "react";
import styled from "styled-components";
function Landing() {
  return (
    <StyledLanding>
      <body>
        <h2>What is YumYumBook?</h2>
        <p>YumYumBook is a collection of recipes that software developers can use freely. It simulates the way a database works.</p>
        <h2>How is it implemented?</h2>
        <h2>Mission Statement</h2>
      </body>
    </StyledLanding>
  );
}

const StyledLanding = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  body {
  }
`;
export default Landing;
