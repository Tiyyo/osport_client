import React from 'react';
import ChatForm from '../ChatForm/ChatForm';
import ChatMessage from '../ChatMessage/ChatMessage';

function Chat() {
  return (
    <div className="w-full">
      <h2 className="text-2xl pb-4">Messages</h2>
      <div className="flex flex-col-reverse gap-2 p-2 overflow-y-auto w-full min-h-0 bg-neutral-focus h-[60vh] shadow-xl border rounded-xl border-gray-700 rounded-b-none sm:h-[50vh]">
        <ChatMessage author="John Doe" message="Ready to play ??" />
        <ChatMessage author="Denis Brogniard" message="AHHH !!" />
        <ChatMessage author="Thomas G." message=".ENV" />
      </div>
      <ChatForm />
    </div>
  );
}

export default Chat;
