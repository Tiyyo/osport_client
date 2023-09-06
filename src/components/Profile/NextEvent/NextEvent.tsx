import React from 'react';
import capitalize from '../../../utils/capitalize';
import formDateNumeric from '../../../utils/formatDateNumeric';
import { Link } from 'react-router-dom';

interface NextEventProps {
  id: number;
  location: string;
  date: string;
  sportName : string;
}

function NextEvent({ id, location, date, sportName } : NextEventProps) {
  return (
    <div className="mb-24 px-4 shadow-sm border border-base-300 rounded-xl bg-neutral-focus sm:mb-0 flex flex-col sm:flex-row sm:justify-around sm:items-center">
      <div className="py-4 text-left">
        <h2 className="text-left text-lg font-bold">{formDateNumeric(date)}</h2>
      </div>
      <div className="flex flex-wrap justify-around gap-4 py-6 sm:w-3/4">
        <div className="stat-desc text-sm">{sportName}</div>
        <div className="stat-title text-sm">{location}</div>
        <Link to={`/event/${id}`}>
          <div className="link text-sm">Go to event</div>
        </Link>
      </div>
    </div>
  );
}

export default NextEvent;
