import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <StyledNav>
      <h1>
        {" "}
        <Link to="/">YumYumBook</Link>
      </h1>
      <li>
        <Link to="/Lookup">Recipe Lookup</Link>
      </li>
      <li>
        {" "}
        <Link to="/Pricing">FAQ</Link>
      </li>
      <li>
        {" "}
        <Link to="/Reference">Database Simulation</Link>
      </li>
    </StyledNav>
  );
}
const StyledNav = styled.nav`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: -30px;
  background-color: red;

  a {
    text-decoration: none;
    color: orange;
  }

  h1 {
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
      1px 1px 0 black;
    margin-right: auto;
    margin-left: 40px;
    font-size: 3.5rem;
    font-family: "Lobster", cursive;
  }

  li {
    font-family: "Open-sans", sans-serif;
    margin-right: 75px;
    margin-top: 15px;
    font-size: 2rem;
    font-weight: 750;
    text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
      1px 1px 0 black;
  }
`;
export default Nav;
