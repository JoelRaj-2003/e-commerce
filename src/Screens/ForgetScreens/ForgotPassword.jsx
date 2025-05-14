import React, { useState } from "react";
import ContinueButton from "../../Components/Buttons/ContinueButtons/ContinueButton";

const ForgetPassword = () => {
  const [forgetPassEmail, setForgetPassEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleForgetBtn = (forgetPassEmail) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(forgetPassEmail);
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
      {!isEmailSent ? (
        <>
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
              Recover your Genki password
            </h2>
            <p className="text-muted text-center mb-4">
              We will send a recovery link to your inbox so that you can reset
              your password and access your account.
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
              handleButton={() => {
                console.log("Reset link sent to", forgetPassEmail);
                setIsEmailSent(true);
              }}
              isDisabled={!handleForgetBtn(forgetPassEmail)}
              isLoading={false}
            />

            <div className="text-center mt-4">
              <button
                className="btn btn-link text-muted p-0"
                onClick={() => console.log("Return to login")}
              >
                Return to Login page
              </button>
            </div>
          </div>
        </>
      ) : (
        <div
          className="p-4 text-center"
          style={{
            maxWidth: "460px",
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "12px",
          }}
        >
          <h2 className="mb-2" style={{ fontWeight: "600" }}>
            Email Sent!
          </h2>
          <p className="text-muted">
            A password recovery link has been sent to <b>{forgetPassEmail}</b>.
            Please check your inbox.
          </p>

          <button
            className="btn btn-link text-muted mt-3"
            onClick={() => {
              setIsEmailSent(false);
              setForgetPassEmail("");
            }}
          >
            Go back
          </button>
          <div>
            <p>Don't received email</p>
            <button>Resend </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgetPassword;
