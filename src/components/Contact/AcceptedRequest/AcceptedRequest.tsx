import React from 'react';
import ContactAdded from '../ContactAdded/ContactAdded';

function AcceptedRequest({ avatar, username, userId }) {
  return (
    <li
      className="bg-neutral-focus flex flex-col gap-6 shadow-xl border border-gray-700 rounded-xl py-2 px-6 my-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="avatar flex self-start items-center gap-6 w-full">
        <div className="w-12 rounded-full sm:w-14">
          {avatar
               ? <img src={avatar} alt="avatar" />
              : <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="default avatar" />}
        </div>
        {username && (<h1 className="text-2xl">{username}</h1>)}
      </div>
      <ContactAdded />
      {/* Si l'Id de l'user connecté est égal à l'Id de l'asker et que le status = pending
          alors on affiche le loader */}
      {/* { contact.asker_id === userId && contact.status === 'pending' && <InvitationLoader /> } */}
      {/* Si l'Id de l'user connecté != de l'Id de l'asker et que le status = pending,
          alors on affiche les boutons pour accepter/refuser l'invitation */}
      {/* { contact.asker_id !== userId && contact.status === 'pending' && <AcceptDeclineButton askedId={userId} askerId={contact.friend.id} /> } */}
    </li>
  );
}

export default AcceptedRequest;
