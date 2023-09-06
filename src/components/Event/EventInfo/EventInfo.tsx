import React from 'react';

interface EventInfoProps {
  date: string;
  sport: number;
  nbPlayers: number;
  status: string;
  winner: number;
  duration: number;
  location : string;
}

function EventInfo({
 date, sport, nbPlayers, status, winner, duration, location,
}: EventInfoProps) {
  return (
    <div className="flex flex-col gap-3 w-full bg-neutral-focus p-4 shadow-xl rounded-xl border border-base-300">
      <h1 className="text-3xl font-bold self-start">
        {/* Si statut open => 'New Event' */}
        {status === 'open' && 'New Event'}
        {/* Si status full => 'Playing' */}
        {status === 'full' && 'Playing'}
        {/* Si status finished => 'Full Time' */}
        {status === 'finished' && 'Full Time'}
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
        {duration && (
        <div className="badge badge-neutral sm:badge-lg shadow-xl border border-gray-70 p-4">
          {duration}
          <span className="pl-1">min</span>
        </div>
          )}
        {location && (
        <div className="badge badge-neutral sm:badge-lg shadow-xl border border-gray-70 p-4">
          {location}
        </div>
          )}
      </div>
    </div>
  );
}

export default EventInfo;
