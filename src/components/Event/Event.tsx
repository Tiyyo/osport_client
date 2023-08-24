import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import EventInfo from './EventInfo/EventInfo';
import PlayerList from './PlayerList/PlayerList';
import PlayerListConfirmed from './PlayerListConfirmed/PlayerListConfirmed';
import PlayerListRating from './PlayerListRating/RatingPlayerList';
import Chat from './Chat/Chat';
import ConfirmEventButton from './ConfirmEventButton/ConfirmEventButton';

function Event() {
  return (
    <>
      <Header />
      <Menu />
      <div className="flex flex-col w-full p-4 mb-28 sm:w-4/5 sm:gap-4 sm:m-auto sm:shadow-xl sm:border sm:rounded-xl sm:border-gray-700 sm:my-4  sm:border-2 sm:flex-row sm:justify-around sm:gap-6">
        <div className="flex flex-col justify-evenly">
          <EventInfo />
          <PlayerList />
          {/* <PlayerListConfirmed />
          <PlayerListRating /> */}
        </div>
        <div className="flex flex-col items-center gap-8 mt-8 w-full sm:w-5/12">
          <ConfirmEventButton />
          <Chat />
        </div>
      </div>
    </>
  );
}

export default Event;
