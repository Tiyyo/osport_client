import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from '../../context/AuthContext';
//
import LogIn from '../LogIn/LogIn';
import SignUp from '../../old/Signup/SignUp';
import Profile from '../Profile/Profile';
import Contact from '../Contact/Contact';
import EventList from '../EventList/EventList';
import EditProfile from '../EditProfile/EditProfile';
import CreateEvent from '../CreateEvent/CreateEvent';
import Event from '../Event/Event';

function App() {

  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/event_list" element={<EventList />} />
          <Route path="/edit_profile" element={<EditProfile />} />
          <Route path="/create_event" element={<CreateEvent />} />
        </Routes>
      </AuthContextProvider>
    </>
    
  );
}

export default App;
