import React from 'react';
import AcceptDeclineButton from '../AcceptDeclineButton/AcceptDeclineButton';

interface PendingRequestProps {
  avatar: string;
  username: string;
  userId: number;
  friendId: number;
}

function PendingRequest({
  avatar, username, userId, friendId,
}: PendingRequestProps) {
  return (
    <li
      className="bg-neutral-focus flex flex-col gap-6 shadow-xl border border-base-300 rounded-xl py-2 px-6 my-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="avatar flex self-start items-center gap-6 w-full">
        <div className="w-12 rounded-full sm:w-14">
          {avatar
               ? <img src={avatar} alt="avatar" />
              : <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="default avatar" />}
        </div>
        {username && (<h1 className="text-2xl">{username}</h1>)}
      </div>
      {/* Si l'Id de l'user connecté != de l'Id de l'asker et que le status = pending,
          alors on affiche les boutons pour accepter/refuser l'invitation */}
      <AcceptDeclineButton askedId={userId} askerId={friendId} />
    </li>
  );
}

export default PendingRequest;
