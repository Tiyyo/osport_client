import React, { useId } from 'react';

interface ChatConfig {
  author: string;
  message: string;
}

function ChatMessage({
 author,
message,
avatar,
createdAt,
userIdMessage,
userId,
displayAuthor,
displayDateMessage,
getMessage,
} : ChatConfig) {
function formatMessageTime(date) {
const messageTimeFormatted = new Intl.DateTimeFormat('fr-FR', {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'Europe/Paris',
  }).format(new Date(date));
return messageTimeFormatted;
}

  // const messageDateFormatted = new Intl.DateTimeFormat('fr-FR', {
  //   day: 'numeric',
  //   month: 'long',
  //   year: 'numeric',
  // }).format(new Date(createdAt));

const ownMessageVariant = 'chat-bubble bg-accent-100 self-end pr-14 relative';
  const receivedMessageVariant = 'chat-bubble bg-primary-300 self-start relative ';

  return (
    <div className={`chat chat-start w-full flex px-8 ${userIdMessage === userId ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`${
            userIdMessage === userId
              ? ownMessageVariant
              : receivedMessageVariant
          } ${displayAuthor ? '' : 'mt-6'}`}
      >
        {!displayAuthor && (
        <span
          className={`absolute -top-4 ${
                userIdMessage === userId ? 'left-1 ' : 'right-1'
              }  text-xs opacity-60`}
        >
          {author}
        </span>
          )}
        {userIdMessage !== userId && (
        <img
          className="absolute -left-5 bottom-1 h-8 w-8 rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500"
          src="/profile_picture.jpg"
          alt="Bordered avatar"
        />
          )}
        {message}
        {createdAt && (
        <p className="text-right text-xs opacity-30">
          {formatMessageTime(createdAt)}
        </p>
        )}

      </div>
    </div>
  );
}

export default ChatMessage;
