import React from 'react';

interface ChatConfig {
  author: string;
  message: string;
  avatar: string;
  createdAt: string;
  userIdMessage: number;
  userId: number;
}

function ChatMessage({
  author,
  message,
  avatar,
  createdAt,
  userIdMessage,
  userId,
} : ChatConfig) {
  const formatDate = (date: string) => new Date(date).toLocaleString();

  return (
    <div className={`chat ${userIdMessage === userId ? 'chat-start' : 'chat-end'} px-4 py-2`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={avatar} alt="author" />
        </div>
      </div>
      <div className="chat-header">
        {author}
        {createdAt && (
          <time className="text-xs p-1 opacity-50">{formatDate(createdAt)}</time>
        )}
      </div>
      <div className="chat-bubble w-2/5">{message}</div>
    </div>
  );
}

export default ChatMessage;
