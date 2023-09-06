import React, { useState } from 'react';
import axiosInstance from '../../../services/axiosInstance';

interface ResultsInputProps {
  userId: number;
  creatorId: number;
  eventId: number;
}

// interface SaveResultProps {
//   loggedUserId: number;
//   matchId: number;
//   firstResult: number;
//   secondResult: number;
// }

function ResultInput({ userId, creatorId, eventId } : ResultsInputProps) {
  const [resultTeamOne, setResultTeamOne] = useState<number>(null);
  const [resultTeamTwo, setResultTeamTwo] = useState<number>(null);

  async function saveResult(
    loggedUserId: number,
    matchId: number,
    firstResult: number,
    secondResult: number,
    ) {
    try {
      const result = await axiosInstance.patch('event/results', {
        userId: loggedUserId,
        eventId: matchId,
        scoreTeam1: firstResult,
        scoreTeam2: secondResult,
      });

      if (result.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    saveResult(userId, eventId, resultTeamOne, resultTeamTwo);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 py-4 justify-evenly w-full items-center bg-neutral-focus shadow-xl border rounded-xl border-base-300 h-full min-[1100px]:flex-row"
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-center">
          <div className="flex flex-col  items-center gap-3">
            <h3 className="font-bold">Team 1</h3>
            <input
              type="number"
              min={0}
              onChange={(e) => setResultTeamOne(parseInt(e.target.value, 10))}
              className="m-2 p-3 pr-0 bg-base-100 shadow-xl border rounded-xl border-gray-700 w-14 text-center text-xl font-bold"
            />
          </div>
          <div className="divider divider-horizontal my-3" />
          <div className="flex flex-col items-center gap-3">
            <h3 className="font-bold">Team 2</h3>
            <input
              type="number"
              min={0}
              onChange={(e) => setResultTeamTwo(parseInt(e.target.value, 10))}
              className="m-2 p-3 pr-0 bg-base-100 shadow-xl border rounded-xl border-gray-700 w-14 text-center text-xl font-bold"
            />
          </div>
        </div>
        <h3 className="text-center text-sm">Enter final score here</h3>
      </div>
      {/* Si l'id de l'user est diffèrent de l'id du créateur de l'event
      ou si l'un des deux champs est vide,on affiche le bouton disabled */}
      {userId !== creatorId || (resultTeamOne === null || resultTeamTwo === null) ? (
        <button type="submit" className="btn btn-disabled" aria-disabled="true">
          Waiting
        </button>
        ) : (
          <button type="submit" className="btn btn-ghost border-gray-500">
            Save result
          </button>
      )}
    </form>
  );
}

export default ResultInput;
