import React, {
 useContext, useRef, useState, useId,
} from 'react';
import CircleEllipsis from '../../../assets/Icons/CircleEllipsis';
import PlayerDefaultIcon from '../../../assets/PlayerDefaultIcon.svg';
import ValidCheck from '../../../assets/Icons/ValidCheck';
import AuthContext from '../../../context/AuthContext';
// We accept only picsum url for faker user or
// pixabay for user without avatar
import userAvatarOrigin from '../../../utils/regex';

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
          // Without the import url, it search with front url, and the
          // image is stocked in back public folder
          ? <img src={userAvatarOrigin.test(avatar) ? avatar : import.meta.env.VITE_SERVER_URL + avatar} alt={username} className="object-cover w-full" />
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
