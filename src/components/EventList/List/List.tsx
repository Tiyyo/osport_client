import React from 'react';
import { Link } from 'react-router-dom';
import formDate from '../../../utils/formatDate';
import ResultLoader from '../ResultLoader/ResultLoader';
import ResultWin from '../ResultTitle/ResultWin';
import ResultLose from '../ResultTitle/ResultLose';
import { Event } from '../../types';

function List({ events } : { events : Event[] }) {
  return (
    <ul className="w-full px-5">
      {/* Si events existe, on map dessus */}
      { events && events.map((event: Event) => (
        <li
          className="bg-neutral-focus flex flex-col items-center gap-2 pb-10 shadow-xl border border-gray-700 rounded-xl py-2 px-6 my-4 sm:items-center sm:justify-between"
          key={event.id}
        >
          <div className="flex justify-between w-full">
            {event.winner_team === event.user_team && <ResultWin />}
            {event.winner_team && event.winner_team !== event.user_team && <ResultLose />}
            {!event.winner_team && <ResultLoader status={event.status} />}
            <div className="text-right">
              <div className="stat-desc text-sm sm:text-lg">{formDate(event.date)}</div>
              <div className="stat-desc text-xs sm:text-base">{event.sport_name}</div>
            </div>
          </div>
          <div className="flex flex-col items-center sm:gap-2 sm:pb-0">
            {/* Si une équipe a gagné et au moins un score => on affiche le score final */}
            {event.winner_team && (event.score_team_1 || event.score_team_2) && (
            <div className="stat-value text-4xl sm:text-5xl">
              {event.score_team_1}
              {' '}
              -
              {' '}
              {event.score_team_2}
            </div>
            )}
            {/* Si pas de vainqueur et statut open => 'Game not started yet' */}
            {!event.winner_team && event.status === 'open' && <p className="text-md font-bold sm:text-2xl">Match not started yet</p>}
            {/* Si pas de vainqueur et statut diffèrent de open => 'Match in progress */}
            {!event.winner_team && event.status !== 'open' && <p className="text-md font-bold sm:text-2xl">Match in progress</p>}

            {/* On envoie l'id de l'event dans l'url */}
            <Link to={`/event/${event.id}`}>
              <p className="link text-md sm:text-lg">View Event</p>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
