import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LogIn from '../LogIn/LogIn';
import SignUp from '../Signup/SignUp';
import Profile from '../Profile/Profile';

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
