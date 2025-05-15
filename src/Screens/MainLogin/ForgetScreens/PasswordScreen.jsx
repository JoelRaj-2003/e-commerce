import React, { useState } from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import ContinueButton from "../../../Components/Buttons/ContinueButtons/ContinueButton";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import "./password.css";

const PassWordCreation = () => {
  const [passwordForm, setPasswordForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordButton = () => {
    console.log("button preseed");
  };

  const hasUpperLower = /(?=.*[a-z])(?=.*[A-Z])/.test(passwordForm.password);
  const hasNumber = /\d/.test(passwordForm.password);
  const isMinLength = passwordForm.password.length >= 8;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h3>Create Password</h3>
      <div
        className="childContainer-password"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "50%",
        }}
      >
        <Input.Password
          type="password"
          name="password"
          className="login-email-input"
          value={passwordForm.password}
          onChange={handleInputChange}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          placeholder="Enter password"
        />
        <Input.Password
          type="password"
          name="confirmPassword"
          className="login-email-input"
          value={passwordForm.confirmPassword}
          onChange={handleInputChange}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          placeholder="Confirm password"
          style={{ marginTop: 16 }}
        />

        <div>
          <div>
            {" "}
            {isMinLength ? (
              <CheckCircleFilled style={{ color: "green", fontSize: "18px" }} />
            ) : (
              <CloseCircleFilled style={{ color: "red", fontSize: "18px" }} />
            )}{" "}
            Minimun 8 Charcters
          </div>
          <div>
            {" "}
            {hasNumber ? (
              <CheckCircleFilled style={{ color: "green", fontSize: "18px" }} />
            ) : (
              <CloseCircleFilled style={{ color: "red", fontSize: "18px" }} />
            )}{" "}
            Numbers
          </div>
          <div>
            {" "}
            {hasUpperLower ? (
              <CheckCircleFilled style={{ color: "green", fontSize: "18px" }} />
            ) : (
              <CloseCircleFilled style={{ color: "red", fontSize: "18px" }} />
            )}{" "}
            Lowercase and UppwerCase
          </div>
        </div>
        <ContinueButton
          isDisabled={!passwordForm.password || !passwordForm.confirmPassword}
          handleButton={() => handlePasswordButton}
          width="80%"
        />
      </div>
    </div>
  );
};

export default PassWordCreation;
