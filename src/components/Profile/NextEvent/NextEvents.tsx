import React from 'react';
import NextEvent from './NextEvent';
import { Event } from '../../types';

function NextEvents({ nextEvents } : { nextEvents : Event[] }) {
  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-xl pl-2">Next events</h2>
      {nextEvents && nextEvents.length > 0 ? nextEvents.map((event) => (
        <NextEvent
          date={event.date}
          key={event.id}
          id={event.id}
          sportName={event.sport_name}
          location={event.location}
        />
    )) : <p className="mb-24 p-4 shadow-sm border border-base-300 rounded-xl bg-neutral-focus sm:mb-0">You don't have any events planed</p>}
    </div>
  );
}

export default NextEvents;
