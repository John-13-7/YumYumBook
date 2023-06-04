import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
function Logout() {
  const navigate = useNavigate();

  function handleLogout() {
    fetch("http://localhost:4000/users/logout", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
    navigate("/");
  }

  return (
    <div>
      <h3>
        Are you sure you want to log out cause with great power comes great
        responsibility
      </h3>
      <button onClick={handleLogout}>click to exponge</button>
    </div>
  );
}

export default Logout;
