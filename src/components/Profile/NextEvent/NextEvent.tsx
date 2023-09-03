import React from 'react';
import formDateNumeric from '../../../utils/formatDateNumeric';

interface NextEventProps {
  location: string;
  date: string;
  sportName : string;
}

function NextEvent({ location, date, sportName } : NextEventProps) {
  return (
    <>
      <div className="stat-title text-sm">{location}</div>
      <div className="stat-value text-sm">{formDateNumeric(date)}</div>
      <div className="stat-desc text-sm">{sportName}</div>
    </>
  );
}

export default NextEvent;
