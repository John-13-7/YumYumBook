import React from "react";
import { useState } from "react";
import { PageDiv, Register } from "./Styles";
function RegisterPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(["", ""]);

  const handleUser = (e) => {
    setUserName(e.target.value);
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const handleEmail = (index) => (e) => {
    let new_email = [...email];
    new_email[index] = e.target.value;
    setEmail(new_email);
  };

  const HandleSubmit = (e) => {
    if (email[0] != email[1]) {
      console.log("Not equal");
    }
    setEmail(["", ""]);
    e.preventDefault();
  };
  return (
    <PageDiv>
      <Register onSubmit={HandleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="email"
          value={email[0]}
          onChange={handleEmail(0)}
          required
        />
        <input
          type="text"
          placeholder="re-type email"
          value={email[1]}
          onChange={handleEmail(1)}
          required
        />
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={handleUser}
          required
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePass}
          required
        />
        <button type="submit">Login</button>
      </Register>
    </PageDiv>
  );
}

export default RegisterPage;
