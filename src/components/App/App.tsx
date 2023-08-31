import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from '../../context/AuthContext';
//
import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';
import Profile from '../Profile/Profile';
import Contact from '../Contact/Contact';
import EventList from '../EventList/EventList';
import EditProfile from '../EditProfile/EditProfile';
import CreateEvent from '../CreateEvent/CreateEventPage';
import Event from '../Event/Event';
import { EventContextProvider } from '../../context/EventContext';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event_list" element={<EventList />} />
        <Route path="/edit_profile" element={<EditProfile />} />
        <Route
          path="/create_event"
          element={(
            <EventContextProvider>
              <CreateEvent />
            </EventContextProvider>
        )}
        />
        <Route path="/event" element={<Event />} />
      </Routes>
    </AuthContextProvider>

  );
}

export default App;
