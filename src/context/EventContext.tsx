import React, {
 createContext, useState, ReactNode, FC, useMemo,
} from 'react';
// import { useNavigate } from 'react-router-dom';

export type EventContextProps = {
  eventData: {
    eventDate?: string;
    location?: string;
    duration?: number;
    nbMaxParticipant?: number;
    eventStatus?: string;
    sportId?: number;
  };
  setEventData: React.Dispatch<React.SetStateAction<
    {
      eventDate?: string;
      location?: string;
      duration?: number;
      nbMaxParticipant?: number;
      eventStatus?: string;
      sportId?: number;
    }
  >>;
};

export const EventContext = createContext<EventContextProps>({
  eventData: {
    eventDate: '',
    location: '',
    // NaN for all number types and to avoid all possible errors anywhere else in the code
    duration: 30,
    nbMaxParticipant: 6,
    eventStatus: '',
    sportId: 0,
  },
  setEventData: () => {},
});

interface Props {
  children?: ReactNode;
}

// <Partial<Props>> is used to make the props optional (with also ? in the interface)
export const EventContextProvider: FC<Partial<Props>> = ({ children }) => {
  // Here we initialize the event
  const [eventData, setEventData] = useState({
    eventDate: '',
    location: 'Just here',
    duration: 30,
    nbMaxParticipant: 6,
    eventStatus: '',
    sportId: 0,
  });
  const eventState: EventContextProps = useMemo(() => (
    { eventData, setEventData }
  ), [eventData, setEventData]);

    // const navigate = useNavigate();

  return (
    <EventContext.Provider value={eventState}>
      {children}
    </EventContext.Provider>
  );
};

export default EventContext;
