import React from 'react';
import AcceptDeclineButton from '../AcceptDeclineButton/AcceptDeclineButton';
import InvitationLoader from '../InvitationLoader/InvitationLoader';

interface ContactsProps {
  contacts: ContactsObject;
  userId: number;
}

interface ContactsObject {
  map(arg0: (contact: ContactsObject) => React.JSX.Element): React.ReactNode;
  friend?: FriendObject;
  status?: string;
  asker_id?: number;
}

interface FriendObject {
  username: string;
  avatar: string;
  id: number;
}

function ContactList({ contacts, userId } : ContactsProps) {
  return (
    <ul className="w-full">
      { contacts && contacts.map((contact: ContactsObject) => (
        <li
          className="bg-neutral-focus flex flex-col gap-6 shadow-xl border border-gray-700 rounded-xl py-2 px-6 my-4 sm:flex-row sm:items-center sm:justify-between"
          key={contact.friend.id}
        >
          <div className="avatar flex self-start items-center gap-6 w-full">
            <div className="w-12 rounded-full sm:w-14">
              <img src={contact.friend.avatar} alt="avatar" />
            </div>
            <h1 className="text-2xl">{contact.friend.username}</h1>
          </div>
          { contact.asker_id === userId && contact.status === 'pending' && <InvitationLoader /> }
          { contact.asker_id !== userId && contact.status === 'pending' && <AcceptDeclineButton /> }
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
