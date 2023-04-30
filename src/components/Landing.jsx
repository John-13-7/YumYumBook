import React from "react";
import styled from "styled-components";
function Landing() {
  return (
    <StyledLanding>
      <h1>Welcome to YumYumBook!</h1>
      <p>
        YumYumBook is an open-source api for everyone to use. No discrimmination
        here, no Ronald Reagan or Richard Nixon here!
      </p>
      <p>Feel free to take a look around. There's no hidden costs, environmentally safe, and Vegan.</p>

    </StyledLanding>
  );
}

const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 25px;
  h1 {
    font-family: "Red Hat Display", sans-serif;
    font-size: 3rem;
  }
  p{
    font-family: "Open-sans", sans-serif;
    font-size: 1.2rem;
  }
`;
export default Landing;
