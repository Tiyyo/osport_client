import React, { useState } from 'react';
import axiosInstance from '../../../services/axiosInstance';

interface ResultsInputProps {
  userId: number;
  eventId: number;
}

function ResultInput({ userId, eventId } : ResultsInputProps) {
  const [resultTeamOne, setResultTeamOne] = useState<number>(null);
  const [resultTeamTwo, setResultTeamTwo] = useState<number>(null);

  async function handleClick(
    accountId: number,
    matchId: number,
    resultTeam1: number,
    resultTeam2: number,
  ) {
    try {
      const res = await axiosInstance.patch('event/results', {
        userId: accountId,
        eventId: matchId,
        scoreTeam1: resultTeam1,
        scoreTeam2: resultTeam2,
      });
      console.log('Server Response:', res);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(setResultTeam: any, e: any) {
    setResultTeam(e.target.value);
  }

  return (
    <div className="flex flex-col gap-4 py-4 justify-evenly w-full items-center bg-neutral-focus shadow-xl border rounded-xl border-gray-700 h-full min-[1100px]:flex-row">
      <div className="flex flex-col gap-2">
        <div className="flex justify-center">
          <div className="flex flex-col  items-center gap-3">
            <h3 className="font-bold">Team 1</h3>
            <input
              type="number"
              min={0}
              onChange={(e) => handleChange(setResultTeamOne, e)}
              className="m-2 p-3 pr-0 bg-base-100 shadow-xl border rounded-xl border-gray-700 w-14 text-center text-xl font-bold"
            />
          </div>
          <div className="divider divider-horizontal my-3" />
          <div className="flex flex-col  items-center gap-3">
            <h3 className="font-bold">Team 2</h3>
            <input
              type="number"
              min={0}
              onChange={(e) => handleChange(setResultTeamTwo, e)}
              className="m-2 p-3 pr-0 bg-base-100 shadow-xl border rounded-xl border-gray-700 w-14 text-center text-xl font-bold"
            />
          </div>
        </div>
        <h3 className="text-center text-sm">Enter final score here</h3>
      </div>
      <button
        type="button"
        onClick={() => handleClick(userId, eventId, resultTeamOne, resultTeamTwo)}
        className="btn"
      >
        Save result
      </button>
    </div>
  );
}

export default ResultInput;
