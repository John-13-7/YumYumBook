import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { StyledNav } from "./Styles";

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isData, setIsData] = useState("");

  const user_validation = () => {
    if (isData !== "") {
      setIsLoggedIn(true);
    }
    if (isData === "admin ") {
      setIsAdmin(true);
    }
  };

  function fetchCurrentUser() {
    fetch("http://localhost:4000/users/current_user")
      .then((response) => response.json())
      .then((data) => {
        setIsData(data);
      })
      .catch((error) => console.error(error));
  }

  //This runs whenver the program mounts
  useEffect(() => {
    fetchCurrentUser();
    user_validation();
  }, []); //Add a value inside [] and whenever it changes this will run again

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
      <h5>{isData}</h5>
    </StyledNav>
  );
}

export default Nav;
