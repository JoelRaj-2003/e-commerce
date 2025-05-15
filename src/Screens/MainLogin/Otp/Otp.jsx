import React, { useState } from "react";
import "./otp.css";
import { useLocation, useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";
import ContinueButton from "../../../Components/Buttons/ContinueButtons/ContinueButton";
import presentToast from "../../../utils/Toast/Toast";
import otpPng from "../../../assets/LoginScreens/OTP.png";

const OtpScreen = ({ title = "Enter OTP" }) => {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const from = searchParams.get("from");
  const email = searchParams.get("email");
  console.log(from, "from");
  console.log(email, "email");

  const handleVerify = () => {
    if (otp.length < 4) {
      presentToast.error("Please enter a valid 4-digit OTP");
      return;
    }
    navigate("/passWordCreation");
    presentToast.success("OTP Verified!");
  };
  return (
    <div className="OTP-Container">
      <img src={otpPng} alt="otp" />
      <h2 className="OTP-titleContainer">{title}</h2>
      <OTPInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderInput={(props) => <input {...props} className="otp-input" />}
      />
      <ContinueButton
        text="Verify OTP"
        handleButton={handleVerify}
        isDisabled={otp.length < 4}
        width="50%"
      />
      <p className="resend-text">
        Didn’t receive the code?{" "}
        <button
          className="resend-link"
          //  onClick={handleResend}
        >
          Resend OTP
        </button>
      </p>
    </div>
  );
};

export default OtpScreen;
