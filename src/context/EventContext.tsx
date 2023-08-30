import React, {
 createContext, useState, ReactNode, FC, useMemo,
} from 'react';
// import { useNavigate } from 'react-router-dom';

interface EventContextProps {
  eventDate: string;
  location: string;
  duration: number;
  nbMaxParticipant: number;
  eventStatus: string;
  sportId: number;
  setPseudo: (name: string) => void;
}

export const EventContext = createContext<EventContextProps>({
  eventDate: null,
  location: null,
  duration: null,
  nbMaxParticipant: null,
  eventStatus: null,
  sportId: null,
  setPseudo: () => {},
});

interface Props {
  children?: ReactNode;
}

// <Partial<Props>> is used to make the props optional (with also ? in the interface)
export const EventContextProvider: FC<Partial<Props>> = ({ children }) => {
  const [eventDate, seteventDate] = useState('hola senior');
  const eventState: any = useMemo(() => ({ eventDate, seteventDate }), [eventDate, seteventDate]);

    // const navigate = useNavigate();

  return (
    <EventContext.Provider value={eventState}>
      {children}
    </EventContext.Provider>
  );
};

export default EventContext;
