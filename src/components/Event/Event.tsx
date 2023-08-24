import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import EventInfo from './EventInfo/EventInfo';
import PlayerList from './PlayerList/PlayerList';
import PlayerListConfirmed from './PlayerListConfirmed/PlayerListConfirmed';
import PlayerListRating from './PlayerListRating/RatingPlayerList';
import Chat from './Chat/Chat';
import ConfirmEvent from './ConfirmEvent/ConfirmEvent';

function Event() {
  return (
    <>
      <Header />
      <Menu />
      <div className="flex flex-col w-full items-center p-4 mb-28 sm:w-4/5 sm:m-auto sm:shadow-xl sm:border sm:rounded-xl sm:border-gray-700 sm:my-4  sm:border-2 sm:flex-row sm:justify-around">
        <div className="flex flex-col">
          <EventInfo />
          <PlayerList />
          {/* <PlayerListConfirmed />
          <PlayerListRating /> */}
        </div>
        <div className="divider mb-0 px-10" />
        <Chat />
        <ConfirmEvent />
      </div>
    </>
  );
}

export default Event;
