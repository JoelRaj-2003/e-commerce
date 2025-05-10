import React, { useState } from "react";
import ContinueButton from "../../Components/Buttons/ContinueButtons/ContinueButton";
import "./Login.css";

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginCredentials;

    if (email && password) {
      console.log("Login submitted:", loginCredentials);
    } else {
      console.log("Please complete all login credentials.");
    }
  };

  const handleLoginButton = () => {
    const { email, password } = loginCredentials;
    if (email && password) {
      console.log("Continue button clicked");
    } else {
      console.log("please fill the required filled");
    }
  };

  return (
    <div className="Login-Container">
      <div className="login-left-container" />

      <div className="login-right-container">
        <h2>E-commerece</h2>
        <h4>Please fill your Details to access your account</h4>
        <form onSubmit={handleSubmit} className="loginform-Container">
          <div d-flex flex-column>
            {" "}
            <label>Email:</label>
            <input
              type="email"
              name="email"
              className="login-email-input"
              value={loginCredentials.email}
              onChange={handleInputChange}
              required
            />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              className="login-password-input"
              value={loginCredentials.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <div d-flex flex-column gap-5>
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <p>Forget Password</p>
          </div>
          <ContinueButton
            text="Login"
            handleButton={handleLoginButton}
            isDisabled={!loginCredentials.email || !loginCredentials.password}
            isLoading={false}
          />
        </form>
        <div d-flex flex-column>
          <p>Don't have an account </p>
          <button className="signup-button">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
