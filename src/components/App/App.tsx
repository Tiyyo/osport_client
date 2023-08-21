import React from "react";
import LogIn from "../LogIn/LogIn";
import SignUp from "../Signup/SignUp";
import Profile from "../Profile/Profile";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState(false);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/login");
  //   } else {
  //     navigate("/");
  //   }
  // }, [navigate, isLoggedIn]);

  return (
    <Routes>
      <Route path="/login" element={<LogIn setisLoggedIn={setisLoggedIn} />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Profile />} />
    </Routes>
  );
}

export default App;
