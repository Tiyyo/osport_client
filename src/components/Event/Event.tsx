import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import EventInfo from './EventInfo/EventInfo';
import PlayerList from './PlayerList/PlayerList';
import PlayerListConfirmed from './PlayerListConfirmed/PlayerListConfirmed';
import PlayerListRating from './PlayerListRating/PlayerListRating';
import Chat from './Chat/Chat';
import ConfirmEventButton from './ConfirmEventButton/ConfirmEventButton';
import ResultInput from './ResultInput/ResultInput';
import FinalScore from './FinalScore/FinalScore';

function Event() {
  return (
    <>
      <Header />
      <Menu />
      <div className="flex flex-col w-full p-4 mx-auto mb-24 sm:flex-row sm:gap-4 sm:w-10/12 sm:m-auto sm:shadow-xl sm:border sm:rounded-xl sm:border-gray-700 sm:my-4 sm:mb-10 sm:pb-4 sm:border-2">
        <div className="flex flex-col gap-4 mb-4 sm:w-1/2 items-center ">
          <EventInfo />
          {/* <PlayerList /> */}
          {/* <PlayerListConfirmed /> */}
          <PlayerListRating />
        </div>
        <div className="flex flex-col-reverse gap-4 mb-4 sm:w-1/2 items-center sm:flex-col">
          <Chat />
          {/* <ConfirmEventButton /> */}
          <ResultInput />
          {/* <FinalScore /> */}
        </div>
      </div>
    </>
  );
}

export default Event;
