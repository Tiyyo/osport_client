/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';
import axiosInstance from '../../../services/axiosInstance';
import AuthContext from '../../../context/AuthContext';
import useFetch from '../../hooks/useFetch';
import LastEvent from './LastEvent';

function EventListPreview({ lastEvents, eventsIds }) {
  const { user: { userInfos: { userId } } } = useContext(AuthContext);
  const [participantListByEvent, setParticipantListByEvent] = useState(null);

  const participantsQueries = eventsIds && eventsIds.map((id) => `participant/event/${id}`);

  const fetchParticipants = async () => {
  await Promise.all(participantsQueries.map((query) => axiosInstance.get(query)
                        .then((res) => {
    setParticipantListByEvent((prev) => {
    if (prev) {
      return [...prev, ...res.data.data];
    }
      return [res.data];
  });
  })));
  };

  useEffect(() => {
  fetchParticipants();
  }, [eventsIds]);

  // console.log(participantsListByEvent);

  function findUserTeam(eventId, userid) {
      if (!participantListByEvent) return;
      const eventParticpants = participantListByEvent.filter((event) => event.event_id === eventId && event.user.id === userid);
      if (eventParticpants[0].team) {
          return eventParticpants[0].team;
  }
  }

    return (
      <div className="stats w-full stats-vertical shadow-xl border border-base-300 rounded-xl mb-4 p-2 bg-neutral-focus sm:mb-0 sm:p-2">
        <h1 className="m-0 text-xl py-3 pl-1 h-fit w-fit sm:pb-0">Last results</h1>
        {
          lastEvents && lastEvents.map((eve) => (
            <LastEvent
              key={eve.id}
              winnerTeam={eve.winner_team}
              date={eve.date}
              sportName={eve.sport_name}
              scoreTeam1={eve.score_team_1}
              scoreTeam2={eve.score_team_2}
              userTeam={1}
            />
            ))
      }
      </div>
    );
}

export default EventListPreview;
