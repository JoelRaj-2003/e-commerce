import React, { useState } from "react";
import ContinueButton from "../../../Components/Buttons/ContinueButtons/ContinueButton";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [forgetPassEmail, setForgetPassEmail] = useState("");
  const navigate = useNavigate();

  const handleForgetBtn = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleForgetButton = () => {
    navigate(
      `/otpScreen?from=signup&email=${encodeURIComponent(forgetPassEmail)}`
    );
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundColor: "#f9fafb",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          alignSelf: "flex-start",
          marginLeft: "3%",
          marginBottom: "4%",
        }}
      >
        CompanyLogo
      </p>

      <div
        className="p-4"
        style={{
          maxWidth: "460px",
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "12px",
        }}
      >
        <h2 className="mb-2 text-center" style={{ fontWeight: "600" }}>
          Recover your password
        </h2>
        <p className="text-muted text-center mb-4">
          We will send a recovery link to your inbox so that you can reset your
          password and access your account.
        </p>

        <label htmlFor="email" className="mb-1 fw-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={forgetPassEmail}
          onChange={(e) => setForgetPassEmail(e.target.value)}
          className="form-control mb-4"
          placeholder="Enter your email"
          style={{
            backgroundColor: "#f1f5f9",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            padding: "12px",
          }}
        />

        <ContinueButton
          text="Reset password"
          handleButton={handleForgetButton}
          isDisabled={!handleForgetBtn(forgetPassEmail)}
          isLoading={false}
        />

        <div className="text-center mt-4">
          <button
            className="btn btn-link text-muted p-0"
            onClick={() => navigate("/")}
          >
            Return to Login page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
