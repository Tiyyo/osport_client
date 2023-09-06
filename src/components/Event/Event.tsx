/* eslint-disable max-len */
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import formDate from '../../utils/formatDate';
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
import ResponseInvitation from './ResponseInvitation/ResponseInvitation';

function Event() {
// On recupère l'id de l'utilisateur connecté dans le AuthContext
const { user } = useContext(AuthContext);
const userId = user?.userInfos.userId;
const [isInvited, setIsInvited] = useState(false);

// Fonction pour récuperer l'id de l'event dans l'url
function GetEventId() {
    const { id } = useParams();
    return parseInt(id, 10);
  }
const eventId = GetEventId();

// On utilise le hook personnalisé pour récupérer les infos de l'event et les particpants d'un match
const { data: event, error: eventsError } = useFetch(`event/details/${eventId}`, 'GET');
const { data: participants, error: participantsError } = useFetch(`participant/event/${eventId}`, 'GET');

const checkIfInvited = (userId) => {
if (!participants) return;
participants.forEach((participant) => {
if (participant.user.id === userId && participant.status === 'pending') {
  setIsInvited(true);
}
});
};

useEffect(() => {
checkIfInvited(userId);
}, [participants, userId]);

console.log(event);

  return (
    <>
      <Header />
      <Menu />
      {isInvited && (<ResponseInvitation eventId={event?.id} userId={userId} />) }

      {event
      && (
      <div className="flex flex-col w-full p-4 mx-auto mb-24 sm:flex-row sm:gap-4 sm:w-10/12 sm:m-auto sm:shadow-xl sm:rounded-xl sm:border-gray-700 sm:my-4 sm:mb-10 sm:pb-4 sm:border">

        <div className="flex flex-col gap-4 mb-4 sm:w-1/2 items-center ">

          {/* On envoie les infos nécessaires au composant d'affichage des informations du match */}
          <EventInfo
            date={formDate(event.date)}
            sport={event.sport_id}
            nbPlayers={event.nb_max_participant}
            status={event.status}
            winner={event.winner_team}
            duration={event.duration}
            location={event.location}
          />

          {/* Composants pour afficher les avatars des joueurs */}

          {/* Si statut open => Affichage des participants */}
          {event.status === 'open' && <PlayerList players={participants} />}
          {/* Si status full => Liste des joueurs des 2 équipes */}
          {event.status === 'full' && <PlayerListConfirmed players={participants} nbPlayers={event.nb_max_participant} />}
          {/* Si stattus finished => Liste des joueurs + notation */}
          {event.status === 'finished'
            && (
            <PlayerListRating
              players={participants}
              nbPlayers={event.nb_max_participant}
              firstTeamScore={event.score_team_1}
              secondTeamScore={event.score_team_2}
              sportId={event.sport_id}
            />
          )}
        </div>

        <div className="flex flex-col-reverse gap-4 mb-4 sm:w-1/2 items-center sm:flex-col">

          {/* Composant qui affiche le chat */}
          <Chat eventId={eventId} />

          {/* Composants pour afficher soit le bouton de confirmation du match, soit l'input pour saisir le résultat ou le résultat final */}

          {/* Si statut open => Bouton pour confirmer le match */}
          {event.status === 'open' && (
          <ConfirmEventButton
            userId={userId}
            creatorId={event.creator_id}
            eventId={eventId}
            status={event.status}
            requiredPlayers={event.nb_max_participant}
            participants={participants}
          />
)}
          {/* Si statut full => Input pour saisir le résultat */}
          {event.status === 'full' && <ResultInput userId={userId} creatorId={event.creator_id} eventId={eventId} />}
          {/* Si statut finished => Affichage du score final */}
          {event.status === 'finished' && <FinalScore firstTeamScore={event.score_team_1} secondTeamScore={event.score_team_2} />}
        </div>
      </div>
      )}
    </>
  );
}

export default Event;
