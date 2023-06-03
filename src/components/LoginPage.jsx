import React, { useState } from "react";
import { LoginPageDiv, StyledForm } from "./Styles";
function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUser = (e) => {
    setUserName(e.target.value);
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    setPassword("");
    setUserName("");
    e.preventDefault();
  };

  return (
    <LoginPageDiv>
      <StyledForm onSubmit={handleSubmit}>
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
      </StyledForm>
    </LoginPageDiv>
  );
}

export default LoginPage;
