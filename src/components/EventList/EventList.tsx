import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import CreateEventButton from './CreateEventButton/CreateEventButton';
import List from './List/List';

function EventList() {
  return (
    <>
      <Header />
      <Menu />
      <div className="flex flex-col items-center p-4 mb-28 sm:w-4/5 sm:m-auto sm:shadow-xl sm:border sm:rounded-xl sm:border-gray-700 sm:my-4 sm:pb-4 sm:border-2">
        <CreateEventButton />
        <List />
      </div>
    </>
  );
}

export default EventList;
