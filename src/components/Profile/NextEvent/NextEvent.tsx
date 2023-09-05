import React from 'react';
import formDateNumeric from '../../../utils/formatDateNumeric';

interface NextEventProps {
  location: string;
  date: string;
  sportName : string;
}

function NextEvent({ location, date, sportName } : NextEventProps) {
  return (
    <div className="mb-24 px-4 shadow-xl border border-base-300 rounded-xl bg-neutral-focus sm:mb-0 flex flex-col sm:flex-row sm:justify-around sm:items-center">
      <div className="py-4 text-left">
        <h2 className="text-left text-xl">Next game</h2>
      </div>
      <div className="flex flex-wrap justify-evenly gap-4 py-6 sm:w-3/4">
        <div className="stat-desc text-sm">{sportName}</div>
        <div className="stat-value text-sm">{formDateNumeric(date)}</div>
        <div className="stat-title text-sm">{location}</div>
      </div>
    </div>
  );
}

export default NextEvent;
