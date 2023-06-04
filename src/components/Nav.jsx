import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { StyledNav } from "./Styles";

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isData, setIsData] = useState("");

  const user_validation = () => {
    if (isData !== "") {
      setIsLoggedIn(true);
    }
  };

  function fetchCurrentUser() {
    fetch("http://localhost:4000/users/current")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setIsData(data);
          user_validation();
        } else {
          console.log("Error", data);
        }
      })
      .catch((error) => console.error(error));
  }

  //This runs whenver the program mounts
  useEffect(() => {
    fetchCurrentUser();
  }, [isData]); //Add a value inside [] and whenever it changes this will run again

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
