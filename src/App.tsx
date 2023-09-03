import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
//
import LogIn from './features/Auth/LogIn';
import SignUp from './components/Signup/SignUp';
import Profile from './components/Profile/Profile';
import Contact from './components/Contact/Contact';
import EventList from './components/EventList/EventList';
import EditProfile from './components/EditProfile/EditProfile';
// import CreateEvent from './components/CreateEvent/CreateEventPage';
import Event from './components/Event/Event';
// import { EventContextProvider } from './context/EventContext';

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
        {/* <Route
          path="/create_event"
          element={(
            <EventContextProvider>
              <CreateEvent />
            </EventContextProvider>
        )}
        /> */}
        <Route path="/event" element={<Event />} />
      </Routes>
    </AuthContextProvider>

  );
}

export default App;
