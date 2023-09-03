import React from 'react';

function FriendCard({ data } : { data :any }) {
return (
  <li className="bg-neutral-focus flex flex-col gap-6 shadow-xl border border-gray-700 rounded-xl py-2 px-6 my-4 sm:flex-row sm:items-center sm:justify-between">
    <div className="avatar flex self-start items-center gap-6 w-full">
      <div className="w-12 rounded-full sm:w-14">
        <img src={data.friend.avatar} alt="avatar" />
      </div>
      <h1 className="text-2xl">{data.friend.username}</h1>
    </div>
    {/* Cette div sera affichée si l'utilisateur a une demande en attente,
            afin qu'il accepte ou refuse l'invitation reçue  */}
    <div className="flex gap-2 self-end sm:self-auto">
      <button type="button" className="btn btn-xs text-success">Accept</button>
      <button type="button" className="btn btn-xs text-error">Decline</button>
    </div>
  </li>
);
}

export default FriendCard;
