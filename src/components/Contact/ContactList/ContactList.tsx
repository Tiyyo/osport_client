import React from 'react';
// import AcceptDeclineButton from '../AcceptDeclineButton/AcceptDeclineButton';
// import InvitationLoader from '../InvitationLoader/InvitationLoader';
// import ContactAdded from '../ContactAdded/ContactAdded';
import AcceptedRequest from '../AcceptedRequest/AcceptedRequest';
import SentRequest from '../SentRequest/SentRequest';
import PendingRequest from '../PendingRequest/PendingRequest';
// We accept only picsum url for faker user or
// pixabay for user without avatar
import userAvatarOrigin from '../../../utils/regex';

interface ContactsProps {
  userId: number;
  accepted: any;
  pendings: any;
  sents: any;
}

function ContactList({
 userId, accepted, pendings, sents,
} : ContactsProps) {
  return (
    <ul className="w-full">
      {pendings && pendings.length > 0 && pendings.map((el) => (
        <PendingRequest
          key={el.friend.id}
          avatar={userAvatarOrigin.test(el.friend.avatar)
            ? el.friend.avatar
            : import.meta.env.VITE_SERVER_URL + el.friend.avatar}
          username={el.friend.username}
          userId={userId}
          friendId={el.friend.id}
        />
        ))}
      {/* Si contacts existe, on map dessus */}
      { accepted && accepted.length > 0 && accepted.map((el) => (
        <AcceptedRequest
          key={el.friend.id}
          avatar={userAvatarOrigin.test(el.friend.avatar)
            ? el.friend.avatar
            : import.meta.env.VITE_SERVER_URL + el.friend.avatar}
          username={el.friend.username}
          userId={userId}
        />
      ))}
      {sents && sents.length > 0 && sents.map((el) => (
        <SentRequest
          key={el.friend.id}
          avatar={userAvatarOrigin.test(el.friend.avatar)
            ? el.friend.avatar
            : import.meta.env.VITE_SERVER_URL + el.friend.avatar}
          username={el.friend.username}
          userId={userId}
        />
        ))}
    </ul>
  );
}

export default ContactList;
