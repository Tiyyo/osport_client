import React from 'react';

function EventInfo() {
  return (
    <div className="w-full">
      {/* Le titre pourra évoluer => New Event/Playing/Full Time selon le statut de l'event */}
      <h1 className="text-3xl py-4">New Event</h1>
      {/* Info à récupérer sur event => Date, Sport, et nb de joueurs (si 6 => 3v3 si 10 => 5v5 */}
      <div className="flex gap-6 py-6">
        <div className="badge badge-lg badge-neutral">13/05/2023</div>
        <div className="badge badge-lg badge-neutral">Football</div>
        <div className="badge badge-lg badge-neutral">5v5</div>
      </div>
    </div>
  );
}

export default EventInfo;
