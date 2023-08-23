import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LogIn from '../LogIn/LogIn';
import SignUp from '../Signup/SignUp';
import Profile from '../Profile/Profile';
import { AuthContext } from '../../context/AuthContext';
import { useAuth } from '../../hooks/useAuth';

function App() {

  const {
    user, login, logout, setUser,
  } = useAuth();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Profile />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
