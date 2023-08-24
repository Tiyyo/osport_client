import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import CreateEventForm from './EventForm/EventForm';
import EventContactList from './EventContactList/EventContactList';
import SendInvitations from './SendInvitations/SendInvitations';

function CreateEvent() {
  return (
    <>
      <Header />
      <Menu />
      <div className="flex flex-col items-center m-4 sm:w-4/5 sm:p-4 sm:m-auto sm:shadow-xl sm:border sm:rounded-xl sm:border-gray-700 sm:pb-4 sm:border-2 sm:mt-4 gap-4  mb-8">
        <h1 className="text-3xl py-2 sm:self-start">New event</h1>
        <CreateEventForm />
        <div className="divider px-20" />
        <div className="flex flex-col w-full sm:flex-row z-0">
          <EventContactList />
          <div className="divider pt-10 px-20" />
          <SendInvitations />
        </div>
      </div>
    </>
  );
}

export default CreateEvent;
