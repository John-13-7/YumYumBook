import React, { useDebugValue, useState } from "react";
import { Link } from "react-router-dom";
import { StyledNav } from "./Styles";
function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
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
      {isAdmin ? (
        <li>
          {" "}
          <Link to="/DatabaseSimulation">Database</Link>
        </li>
      ) : (
        ""
      )}
      {!isLoggedIn ? (
        <li>
          <Link to="/Login">Login</Link>
        </li>
      ) : (
        <li>
          <Link to="/Logout">Logout</Link>
        </li>
      )}
    </StyledNav>
  );
}

export default Nav;
