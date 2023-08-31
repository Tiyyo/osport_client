/* eslint-disable no-nested-ternary */

import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import useFetch from '../hooks/useFetch';

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
const { user } = useContext(AuthContext);
const { userId } = user.userInfos.userId;

// On recupere l'id de l'event dans l'url
function GetEventId() {
    const { id } = useParams();
    return id;
  }

const eventId = GetEventId();

const { data: foundEvent, error: eventsError } = useFetch(`event/details/${eventId}`, 'GET');
// useState(null) pour éviter l'erreur 'Property does not exist on type 'never'
// => Même vide event est de type null et existe donc
const [event, setEvent] = useState(null);

useEffect(() => {
  if (foundEvent) {
    setEvent(foundEvent);
  }
}, [foundEvent]);

if (eventsError) return null;

  return (
    <>
      <Header />
      <Menu />
      {event
      && (
      <div className="flex flex-col w-full p-4 mx-auto mb-24 sm:flex-row sm:gap-4 sm:w-10/12 sm:m-auto sm:shadow-xl sm:border sm:rounded-xl sm:border-gray-700 sm:my-4 sm:mb-10 sm:pb-4 sm:border-2">
        <div className="flex flex-col gap-4 mb-4 sm:w-1/2 items-center ">
          <EventInfo
            date={event.date}
            sport={event.sport_id}
            nbPlayers={event.nb_max_participants}
            status={event.status}
            winner={event.winner_team}
          />
          {
          // Nested ternary pour afficher le composant qui affiche la liste des joueurs
          // On regarde si le status est full (match verouillé)
          // Si oui, on regarde si il y a un vainqueur (winner)
          // full sans winner => <PlayerListConfirmed />
          // full avec winner => <PlayerListRating />
          // Si le match n'est pas full (open), on affiche <PlayerList />
          event.status === 'full' ? !event.winner_team
            ? <PlayerListConfirmed />
            : <PlayerListRating />
            : <PlayerList />
          }
        </div>
        <div className="flex flex-col-reverse gap-4 mb-4 sm:w-1/2 items-center sm:flex-col">
          <Chat />
          {
          // Nested ternary pour afficher le composant Resultat
          // On regarde si le status est full (match verouillé)
          // Si oui, on regarde si il y a un vainqueur (winner)
          // full sans winner => <ResultInput />
          // full avec winner => <FinalScore />
          // Si le match n'est pas full (open), on affiche <ConfirmEventButton />
          event.status === 'full' ? !event.winner_team
            ? <ResultInput />
            : (
              <FinalScore
                firstTeamScore={event.score_team_1}
                secondTeamScore={event.score_team_2}
              />
              )
            : <ConfirmEventButton />
          }
        </div>
      </div>
      )}
    </>
  );
}

export default Event;
