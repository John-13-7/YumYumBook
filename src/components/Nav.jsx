import React from "react";
import { Link } from "react-router-dom";
import { StyledNav } from "./Styles";
import { useState } from "react";
function Nav() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [user, setUser] = useState("");

  // const handleUsers = () => {
  //   if (isGuest) {
  //     setUser("guest");
  //   } else if (isUser) {
  //     setUser("user");
  //   } else if (isAdmin) {
  //     setUser("admin");
  //   }
  // };

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
      <li>
        <Link to="/LoginPage">Login</Link>
      </li>
    </StyledNav>
  );
}

export default Nav;
