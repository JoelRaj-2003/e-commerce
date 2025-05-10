import { useState } from "react";
import "./App.css";
import Login from "./Screens/Login/Login";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
