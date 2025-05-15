import { useState } from "react";
import "./App.css";
import Login from "./Screens/MainLogin/Login/Login";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ForgetPassword from "./Screens/MainLogin/ForgetScreens/RecoveryEmailScreen";
import OtpScreen from "./Screens/MainLogin/Otp/Otp";
import PassWordCreation from "./Screens/MainLogin/ForgetScreens/PasswordScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/otpScreen" element={<OtpScreen />} />
        <Route path="/passWordCreation" element={<PassWordCreation />} />
      </Routes>
    </>
  );
}

export default App;
