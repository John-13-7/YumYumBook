import React, { useState } from "react";
import { PageDiv, Login } from "./Styles";
function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUser = (e) => {
    setUserName(e.target.value);
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const HandleSubmit = (e) => {
    fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name: userName, password: password }),
    });
    setPassword("");
    setUserName("");
    e.preventDefault();
  };

  return (
    <PageDiv>
      <Login onSubmit={HandleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={handleUser}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePass}
          required
        />
        <button type="submit">Login</button>
      </Login>
    </PageDiv>
  );
}

export default LoginPage;
