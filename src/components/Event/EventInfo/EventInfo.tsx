/* eslint-disable no-nested-ternary */

import React from 'react';

interface EventInfoProps {
  date: string;
  sport: number;
  nbPlayers: number;
  status: string;
  winner: number;
}

function EventInfo({
 date, sport, nbPlayers, status, winner,
}: EventInfoProps) {
  return (
    <div className="flex flex-col gap-3 w-full bg-neutral-focus p-4 shadow-xl border rounded-xl border-gray-700">
      <h1 className="text-3xl font-bold self-start">
        {
        // Nested ternary pour afficher l'en-tête du match
        // On regarde si le status est full (match verouillé)
        // Si oui, on regarde si il y a un vainqueur (winner)
        // full sans winner => "Playing"
        // full avec winner => "Full Time"
        // Si le match n'est pas full (open), on affiche "New Event"
        status === 'full' ? !winner ? 'Playing' : 'Full Time' : 'New Event'
        }
      </h1>
      <div className="flex gap-4 py-6 flex-wrap">
        <div className="badge badge-neutral sm:badge-lg shadow-xl border border-gray-70 p-4">{date}</div>
        <div className="badge badge-neutral sm:badge-lg shadow-xl border border-gray-70 p-4">

          {/* Si l'id du sport est 1 => Football, si 2 => Basketball */}
          {sport === 1 ? 'Football' : 'Basketball'}
        </div>
        <div className="badge badge-neutral sm:badge-lg shadow-xl border border-gray-70 p-4">

          {/* Si le nombre de joueurs est de 6 => 3v3 si 10 => 5v5 */}
          {nbPlayers === 6 ? '3v3' : '5v5'}
        </div>
      </div>
    </div>
  );
}

export default EventInfo;
