/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import CircleEllipsis from '../../../assets/Icons/CircleEllipsis';
import PlayerDefaultIcon from '../../../assets/PlayerDefaultIcon.svg';
import ValidCheck from '../../../assets/Icons/ValidCheck';
// We accept only picsum url for faker user or
// pixabay for user without avatar
import userAvatarOrigin from '../../../utils/regex';

type Status = 'pending' | 'accepted' | 'rejected';

interface PlayerProps {
  id : number;
  avatar : string;
  username : string;
  status : Status;
  isConfirmed?: boolean;
  getUserToRateId?: (state : number) => void;
}

function PlayerComp({
 id, avatar, username, status, isConfirmed, getUserToRateId,
} : PlayerProps) {
const handleClick = () => {
  if (isConfirmed) {
    getUserToRateId(id);
  }
};

  return (
    <div className="indicator">
      <div
        className="flex flex-col items-center justify-center gap-y-1"
        onClick={handleClick}
      >
        {status === 'pending'
        ? <span className="indicator-item badge bg-blue-400 text-black font-bold aspect-square mt-1 mr-2 border border-neutral pb-2">...</span>
        : <span className="indicator-item badge bg-green-400 font-bold text-black aspect-square mt-1 mr-2 border border-neutral">✓</span>}
        <div className="w-12 aspect-square rounded-full sm:w-16 overflow-hidden">
          {avatar
          // Without the import url, it search with front url, and the
          // image is stocked in back public folder
          ? <img src={userAvatarOrigin.test(avatar) ? avatar : import.meta.env.VITE_SERVER_URL + avatar} alt={username} className="object-cover w-full" />
          : <img src={PlayerDefaultIcon} alt={username} />}
        </div>
        <p className="flex text-center text-xs gap-1 items-center justify-center">
          {username}
        </p>
      </div>
    </div>

  );
}

export default PlayerComp;
