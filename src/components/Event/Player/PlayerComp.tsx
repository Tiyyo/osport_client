import React from 'react';
import CircleEllipsis from '../../../assets/Icons/CircleEllipsis';
import PlayerDefaultIcon from '../../../assets/PlayerDefaultIcon.svg';
import ValidCheck from '../../../assets/Icons/ValidCheck';

type Status = 'pending' | 'accepted' | 'rejected';

interface PlayerProps {
  id : number;
  avatar : string;
  username : string;
  status : Status;
}

function PlayerComp({
 id, avatar, username, status,
} : PlayerProps) {
  return (
    <div
      key={id}
      className="flex flex-col items-center justify-center gap-y-1"
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
