import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledNav } from "./Styles";
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
        <Link to="/DatabaseSimulation">Database</Link>
      </li>
    </StyledNav>
  );
}

export default Nav;
