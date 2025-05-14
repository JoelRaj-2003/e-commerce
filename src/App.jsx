import { useState } from "react";
import "./App.css";
import Login from "./Screens/Login/Login";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ForgetPassword from "./Screens/ForgetScreens/ForgotPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
      </Routes>
    </>
  );
}

export default App;
