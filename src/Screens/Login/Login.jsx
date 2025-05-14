import React, { useState } from "react";
import ContinueButton from "../../Components/Buttons/ContinueButtons/ContinueButton";
import "./Login.css";
import presentToast from "../../utils/Toast/Toast";

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

    if (isValidEmail(email) && password.length >= 8) {
      console.log("Login submitted:", loginCredentials);
    } else {
      console.log("Please complete all login credentials.");
    }
  };

  const handleLoginButton = () => {
    const { email, password } = loginCredentials;
    if (isValidEmail(email) && password.length >= 8) {
      presentToast.success("succesfully Login");
      console.log("Continue button clicked");
    } else {
      console.log("Please fill the required fields");
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const vaildateButton = () => {
    return (
      isValidEmail(loginCredentials.email) &&
      loginCredentials.password.length >= 8
    );
  };
  return (
    <div className="Login-Container">
      <div className="login-left-container" />
      <p className="Login-LogoContainer">Company Logo</p>

      <div className="login-right-container">
        <h2>E-commerce</h2>
        <h4>Please fill your details to access your account</h4>

        <form onSubmit={handleSubmit} className="loginform-Container">
          <div className="d-flex flex-column mb-3">
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

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                id="remember"
                style={{ width: 20, height: 20 }}
              />
              <label htmlFor="remember" className="ms-2 mb-0">
                Remember me
              </label>
            </div>
            <p
              className="mb-0 text-primary ms-4 fw-bold"
              style={{ cursor: "pointer" }}
            >
              Forgot Password?
            </p>
          </div>

          <ContinueButton
            text="Login"
            handleButton={handleLoginButton}
            // isDisabled={!loginCredentials.email || !loginCredentials.password}
            isDisabled={!vaildateButton()}
            isLoading={false}
          />
        </form>

        <div className="d-flex align-items-center gap-2 mt-4">
          <p className="mb-0">Don't have an account?</p>
          <button className="signup-button mt-0">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
