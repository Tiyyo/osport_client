import React from "react";
import LogIn from "../LogIn/LogIn";
import SignUp from "../Signup/SignUp";
import Profile from "../Profile/Profile";
import "./App.css";
import { Routes , Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Profile />} />
    </Routes>
  );
}

export default App;
