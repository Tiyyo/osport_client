import React from 'react';
import formDateNumeric from '../../../utils/formatDateNumeric';

interface LastEventProps {
  winnerTeam: number;
  date: string;
  sportName : string;
  scoreTeam1: number;
  scoreTeam2: number;
  userTeam: number;
}

function displayResult(winnerTeam, userTeam) {
if (winnerTeam === 0) {
  return <div className="stat-title text-sm sm:text-base">DRAW</div>;
}
if (winnerTeam === userTeam) {
  return <div className="stat-title text-sm text-success sm:text-base">WIN</div>;
}
if (winnerTeam !== userTeam) {
  return <div className="stat-title text-sm  text-error sm:text-base">LOSE</div>;
}
}

function LastEvent({
 winnerTeam, date, sportName, scoreTeam1, scoreTeam2, userTeam,
} : LastEventProps) {
  return (
    <div className="flex stat justify-evenly p-2 items-center sm:p-0">
      {displayResult(winnerTeam, userTeam)}
      <div className="stat-desc text-xs sm:text-sm">{formDateNumeric(date)}</div>
      <div className="stat-value text-sm sm:text-base">
        <span>
          {scoreTeam1}
          {' '}
          <span>-</span>
          {' '}
          {scoreTeam2}
        </span>
      </div>
      <div className="stat-desc text-sm sm:text-base">{sportName}</div>
    </div>
  );
}

export default LastEvent;
