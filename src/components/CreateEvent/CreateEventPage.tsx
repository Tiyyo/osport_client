import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import CreateEventForm from './EventForm/EventForm';
import FriendsToInvite from './FriendsToInvite/FriendsToInvite';
import SendInvitations from './SendInvitations/SendInvitations';

function CreateEventPage() {
  return (
    <>
      <Header />
      <Menu />
      <div className="flex flex-col items-center m-4 sm:w-4/5 sm:p-4 sm:m-auto sm:shadow-xl sm:border sm:rounded-xl sm:border-gray-700 sm:pb-4 sm:border-2 sm:mt-4 gap-4 mb-24 sm:mb-16">

        <CreateEventForm />
        <div className="flex flex-col w-full gap-4 sm:flex-row">
          <FriendsToInvite />
          <SendInvitations />
        </div>
      </div>
    </>
  );
}

export default CreateEventPage;
