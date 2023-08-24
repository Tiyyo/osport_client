import React from 'react';

function EventInfo() {
  return (
    <div className="flex flex-col w-full bg-neutral-focus p-4 shadow-xl border rounded-xl border-gray-700">
      {/* Le titre pourra évoluer => New Event/Playing/Full Time selon le statut de l'event */}
      <h1 className="text-3xl">New Event</h1>
      {/* Info à récupérer sur event => Date, Sport, et nb de joueurs (si 6 => 3v3 si 10 => 5v5 */}
      <div className="flex gap-4 py-6">
        <div className="badge badge-neutral sm:badge-lg">13/05/2023</div>
        <div className="badge badge-neutral sm:badge-lg">Football</div>
        <div className="badge badge-neutral sm:badge-lg">5v5</div>
      </div>
    </div>
  );
}

export default EventInfo;
