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
// On recupère l'id de l'utilisateur connecté dans le AuthContext
const { user } = useContext(AuthContext);
const { userId } = user.userInfos;

// Fonction pour récuperer l'id de l'event dans l'url
function GetEventId() {
    const { id } = useParams();
    return parseInt(id, 10);
  }
const eventId = GetEventId();

// On utilise le hook personnalisé pour récupérer les infos de l'event
const { data: foundEvent, error: eventsError } = useFetch(`event/details/${eventId}`, 'GET');

// useState(null) pour éviter l'erreur 'Property does not exist on type 'never'
// => Même vide event est de type null et existe donc
const [event, setEvent] = useState(null);

// On met à jour l'état de l'event si on reçoit les infos de l'event
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
          {/* On envoie les infos nécessaires au composant */}
          <EventInfo
            date={event.date}
            sport={event.sport_id}
            nbPlayers={event.nb_max_participants}
            status={event.status}
            winner={event.winner_team}
          />

          {/* Si le match a un vainqueur enregistré => Liste des joueurs + notation */}
          {event.winner_team && <PlayerListRating />}
          {/* Si pas de vainqueur et statut open => Affichage des participants */}
          {!event.winner_team && event.status === 'open' && <PlayerList />}
          {/* Si pas de vainqueur et statut diffèrent de open => Liste des joueurs des 2 équipes */}
          {!event.winner_team && event.status !== 'open' && <PlayerListConfirmed />}
        </div>
        <div className="flex flex-col-reverse gap-4 mb-4 sm:w-1/2 items-center sm:flex-col">
          <Chat />

          {/* Si le match a un vainqueur enregistré => Affichage du score final */}
          {event.winner_team
          && (
          <FinalScore
            firstTeamScore={event.score_team_1}
            secondTeamScore={event.score_team_2}
          />
          )}
          {/* Si pas de vainqueur et statut open => Bouton pour confirmer le match */}
          {!event.winner_team && event.status === 'open' && <ConfirmEventButton userId={userId} eventId={eventId} />}
          {/* Si pas de vainqueur et statut diffèrent de open => Input pour saisir le résultat */}
          {!event.winner_team && event.status !== 'open' && <ResultInput userId={userId} eventId={eventId} />}
        </div>
      </div>
      )}
    </>
  );
}

export default Event;
