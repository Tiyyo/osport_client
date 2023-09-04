import React from 'react';
import capitalize from '../../../utils/capitalize';
import formDateNumeric from '../../../utils/formatDateNumeric';

interface NextEventProps {
  location: string;
  date: string;
  sportName : string;
}

function NextEvent({ location, date, sportName } : NextEventProps) {
  return (
    <div className="flex items-center justify-around mb-24 py-3 shadow-xl border border-gray-700 rounded-xl bg-neutral-focus sm:mb-0">
      <div className="stat-title text-sm">{capitalize(location)}</div>
      <div className="stat-value text-sm text-center">{formDateNumeric(date)}</div>
      <div className="stat-desc text-sm">{sportName}</div>
    </div>
  );
}

export default NextEvent;
