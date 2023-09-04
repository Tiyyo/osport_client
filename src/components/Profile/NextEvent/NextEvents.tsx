import React from 'react';
import NextEvent from './NextEvent';

interface NextEventsProps {
  nextEvents : any;
}

function NextEvents({ nextEvents } : any) {
  return (
    <>
      <h2 className="text-center">Next games</h2>
      <div className="flex flex-col gap-y-2 shadow-md">
        {nextEvents && nextEvents.length > 0 ? nextEvents.map((event) => (
          <NextEvent
            date={event.date}
            key={event.id}
            sportName={event.sport_name}
            location={event.location}
          />
)) : <p className="text-center py-4">You don't have any events planed</p>}
      </div>
    </>
  );
}

export default NextEvents;
