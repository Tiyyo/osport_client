import React from 'react';

interface ChatConfig {
  author: string;
  message: string;
}

function ChatMessage({ author, message } : ChatConfig) {
  return (
    <div className="chat chat-start">
      {/* Pour afficher le message à gauche si l'user est l'auteur du message =>
      className={`chat ${user === author ? 'self-end chat-end' : 'chat-start'}`} */}
      <div className="chat-header pb-1">
        {author}
        <time className="text-xs opacity-50 pl-2">17:03 - 14/05/23</time>
      </div>
      <div className="chat-bubble chat-bubble">{message}</div>
      <div className="chat-footer opacity-50" />
    </div>
  );
}

export default ChatMessage;
