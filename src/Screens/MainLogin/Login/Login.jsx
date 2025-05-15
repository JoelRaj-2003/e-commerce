import React, { useEffect, useState } from "react";
import ContinueButton from "../../../Components/Buttons/ContinueButtons/ContinueButton";
import "./Login.css";
import presentToast from "../../../utils/Toast/Toast";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import signUPImage from "../../../assets/LoginScreens/signUpLeft.svg";

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [signUp, setSignUp] = useState(true);
  const [signUpCredentials, setSignUpCredentials] = useState({
    signupEmail: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("loginRememberMe");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setLoginCredentials({
          email: parsed.email || "",
          password: parsed.password || "",
        });
        setRememberMe(true);
      } catch (err) {
        console.error("Error parsing remembered login:", err);
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUpCredentials = (e) => {
    const { name, value } = e.target;
    setSignUpCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateLoginButton = () =>
    isValidEmail(loginCredentials.email) &&
    loginCredentials.password.length >= 8;

  const handleLoginButton = () => {
    const { email, password } = loginCredentials;

    if (isValidEmail(email) && password.length >= 8) {
      if (rememberMe) {
        localStorage.setItem(
          "loginRememberMe",
          JSON.stringify(loginCredentials)
        );
      } else {
        localStorage.removeItem("loginRememberMe");
      }

      presentToast.success("Successfully logged in!");
      console.log("Login successful:", loginCredentials);
    } else {
      presentToast.error("Invalid email or password.");
    }
  };

  const handleSignUp = () => {
    if (isValidEmail(signUpCredentials.signupEmail)) {
      navigate(
        `/otpScreen?from=signup&email=${encodeURIComponent(
          signUpCredentials.signupEmail
        )}`
      );
      presentToast.success("OTP sent to email");
    } else {
      presentToast.error("Enter a valid signup email");
    }
  };

  return (
    <div className="Login-Container">
      {signUp ? (
        <>
          <div className="login-left-container" />
          <p className="Login-LogoContainer">Company Logo</p>
          <div className="login-right-container">
            <h2>E-commerce</h2>
            <h4>Please fill your details to access your account</h4>

            <form className="loginform-Container">
              <div className="d-flex flex-column mb-3">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  className="login-email-input"
                  value={loginCredentials.email}
                  onChange={handleInputChange}
                />

                <label>Password:</label>
                <Input.Password
                  type="password"
                  name="password"
                  className="login-email-input"
                  value={loginCredentials.password}
                  onChange={handleInputChange}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    style={{ width: 20, height: 20 }}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label htmlFor="remember" className="ms-2 mb-0">
                    Remember me
                  </label>
                </div>
                <p
                  className="mb-0 text-primary ms-4 fw-bold"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/ForgetPassword")}
                >
                  Forgot Password?
                </p>
              </div>

              <ContinueButton
                text="Login"
                handleButton={handleLoginButton}
                isDisabled={!validateLoginButton()}
                isLoading={false}
              />
            </form>

            <div className="d-flex align-items-center gap-2 mt-4">
              <p className="mb-0">Don't have an account?</p>
              <button
                style={{
                  color: "#f47458",
                  border: "none",
                  backgroundColor: "transparent",
                }}
                className="signup-button mt-0"
                onClick={() => {
                  setSignUp(false);
                }}
              >
                Sign up
              </button>
            </div>
          </div>
        </>
      ) : (
        <div style={{ width: "100vw", height: "100vh" }}>
          <p className="Login-LogoContainer">Company Logo</p>
          <div className="signUp-Wrap">
            <div className="signUp-Image-container">
              <img src={signUPImage} classname="signUp-Image" />
            </div>
            <div
              className="signUp-Container "
              style={{
                maxWidth: "460px",
                width: "100%",
                backgroundColor: "#fff",
                borderRadius: "12px",
              }}
            >
              <h2>Sign Up</h2>
              <input
                type="email"
                name="signupEmail"
                className="form-control mb-4"
                placeholder="Enter your email"
                style={{
                  backgroundColor: "#f1f5f9",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  padding: "12px",
                }}
                value={signUpCredentials.signupEmail}
                onChange={handleSignUpCredentials}
              />

              <ContinueButton
                text="Send OTP"
                handleButton={handleSignUp}
                width="100%"
                isDisabled={!isValidEmail(signUpCredentials.signupEmail)}
              />

              <button
                onClick={() => {
                  setSignUp(true);
                }}
                className="signup-button mt-3"
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                Back to Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
