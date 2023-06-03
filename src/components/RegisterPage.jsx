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
    if (email[0] === email[1]) {
      fetch("http://localhost:4000/users/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          password: password,
          email: email[0],
        }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Login failed");
          }
        })
        .then((data) => {
          console.log("Token:", data.token);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    } else {
      console.log("email does not match");
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
