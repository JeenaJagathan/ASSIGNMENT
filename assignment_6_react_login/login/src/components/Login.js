import React, { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const click = () => {
    if (userName === "" || password === "") {
      setError("Please enter a username and password");
      setSuccess("");
    } else if (userName !== "admin" || password !== "password") {
      setError("Invalid username or password");
      setSuccess("");
    } else {
      console.log("logedin");
      setSuccess("Login successful!");
      setError("");
    }
  };
  return (
    <div>
           <div class="container">
      <div class="form-container">
        <form>
          UserName:
          <input
            type="text"
            name="username"
            id="uname"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          /><br/>
          Password:
          <input
            type="password"
            name="password"
            id="psw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br/>
          <button onClick={click}>Login</button>
        </form>
        <div>{error}</div>
        <div>{success}</div>
      </div>
      </div>
    </div>
  );
}

export default Login;
