import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import CreateEventForm from './EventForm/EventForm';
import EventContactList from './EventContactList/EventContactList';
import InvitedContact from './InvitedContact/InvitedContact';

function CreateAnEvent() {
  return (
    <>
      <Header />
      <Menu />
      <div className="flex flex-col items-center m-4 sm:w-4/5 sm:p-4 sm:m-auto sm:shadow-xl sm:border sm:rounded-xl sm:border-gray-700 sm:pb-4 sm:border-2 sm:mt-4">
        <h1 className="text-3xl py-2 sm:self-start">New event</h1>
        <CreateEventForm />
        <EventContactList />
        <InvitedContact />
      </div>
    </>
  );
}

export default CreateAnEvent;
