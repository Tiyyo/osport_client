import React, { createContext, useContext, useState } from 'react';

const EventContext = createContext();

export function useEventContext() {
  return useContext(EventContext);
}

export function EventProvider({ children }) {
  const [eventData, setEventData] = useState({});

  const setEventForm = (formData) => {
    setEventData((prevData) => ({
      ...prevData,
      eventForm: formData,
    }));
  };

  const setContactList = (contacts) => {
    setEventData((prevData) => ({
      ...prevData,
      contactList: contacts,
    }));
  };

  const contextValue = {
    eventData,
    setEventForm,
    setContactList,
  };

  return (
    <EventContext.Provider value={contextValue}>
      {children}
    </EventContext.Provider>
  );
}
