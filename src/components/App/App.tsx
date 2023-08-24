import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LogIn from '../LogIn/LogIn';
import SignUp from '../Signup/SignUp';
import Profile from '../Profile/Profile';
import { AuthContext } from '../../context/AuthContext';
import { useAuth } from '../../hooks/useAuth';
import Contact from '../Contact/Contact';
import EventList from '../EventList/EventList';
import EditProfile from '../EditProfile/EditProfile';

function App() {
  // const navigate = useNavigate();
  // const [isLoggedIn, setisLoggedIn] = useState(false);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate('/login');
  //   } else {
  //     navigate('/');
  //   }
  // }, [navigate, isLoggedIn]);

  const {
    user, login, logout, setUser,
  } = useAuth();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Routes>
        {/* <Route path="/login" element={<LogIn setIsLoggedIn={setisLoggedIn} />} /> */}
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event_list" element={<EventList />} />
        <Route path="/edit_profile" element={<EditProfile />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
