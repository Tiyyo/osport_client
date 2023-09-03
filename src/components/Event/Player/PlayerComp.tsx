import React, {
 useContext, useRef, useState, useId,
} from 'react';
import CircleEllipsis from '../../../assets/Icons/CircleEllipsis';
import PlayerDefaultIcon from '../../../assets/PlayerDefaultIcon.svg';
import ValidCheck from '../../../assets/Icons/ValidCheck';
import AuthContext from '../../../context/AuthContext';

type Status = 'pending' | 'accepted' | 'rejected';

interface PlayerProps {
  id : number;
  avatar : string;
  username : string;
  status : Status;
  sportId?: number;
  isConfirmed?: boolean;
}

function PlayerComp({
 id, avatar, username, status, sportId, isConfirmed, getUserToRateId,
} : PlayerProps) {
  const { user: { userInfos: { userId } } } = useContext(AuthContext);

const handleClick = () => {
  if (isConfirmed) {
    getUserToRateId(id);
  }
};

  return (
    <div
      key={id}
      className="flex flex-col items-center justify-center gap-y-1"
      onClick={handleClick}
    >
      <div className="w-12 aspect-square rounded-full sm:w-14 overflow-hidden">
        {avatar
                ? <img src={avatar} alt={username} className="object-cover w-full" />
                 : <img src={PlayerDefaultIcon} alt={username} />}
      </div>
      <p className="flex text-center text-xs gap-1 items-center justify-center">
        {username}
        <span>
          {status === 'pending' ? <CircleEllipsis /> : <ValidCheck /> }
        </span>
      </p>
    </div>

  );
}

export default PlayerComp;
