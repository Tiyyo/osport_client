import React from 'react';
import NextEvent from './NextEvent';

interface NextEventsProps {
  nextEvents : any;
}

function NextEvents({ nextEvents } : any) {
  return (
    <>
      <h2 className="text-center">Next games</h2>
      <div className="flex items-center justify-around mb-24 p-2 shadow-xl border border-gray-700 rounded-xl bg-neutral-focus sm:mb-0">
        {nextEvents && nextEvents.length > 0 ? nextEvents.map((event) => (
          <NextEvent
            date={event.date}
            key={event.id}
            sportName={event.sport_name}
            location={event.location}
          />
)) : <p>You don't have any events planed</p>}
      </div>
    </>
  );
}

export default NextEvents;
