import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import CreateEventForm from './EventForm/EventForm';
import EventContactList from './EventContactList/EventContactList';
import SendInvitations from './SendInvitations/SendInvitations';
import { useEventContext } from '../../context/EventContext';

function CreateEvent() {
  const { eventData } = useEventContext();

  return (
    <>
      <Header />
      <Menu />
      <div className="flex flex-col items-center m-4 sm:w-4/5 sm:p-4 sm:m-auto sm:shadow-xl sm:border sm:rounded-xl sm:border-gray-700 sm:pb-4 sm:border-2 sm:mt-4 gap-4 mb-24 sm:mb-16">
        <CreateEventForm />
        <div className="flex flex-col w-full gap-4 sm:flex-row">
          <EventContactList />
          <SendInvitations eventData={eventData} />
        </div>
      </div>
    </>
  );
}

export default CreateEvent;

// POST http://localhost:5000/event
// Content-Type: application/json

// {
//   "userId": 8,
//   "eventDate": "2023-08-28T16:38:15.381Z",
//   "location": "A la maison",
//   "duration": 45,
//   "nbMaxParticipant": 12,
//   "eventStatus": "Juste créé",
//   "sportId": 1
// }
