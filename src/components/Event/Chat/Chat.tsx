import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../context/AuthContext';
import useFetch from '../../hooks/useFetch';
import ChatForm from '../ChatForm/ChatForm';
import ChatMessage from '../ChatMessage/ChatMessage';
import isDateEquals from '../../../utils/isDateEquals';

function Chat({ eventId }) {
  const { user: { userInfos: { userId } } } = useContext(AuthContext);
  const { data: userInfos } = useFetch(`user/${userId}`, 'GET');
  const { data: historic } = useFetch(`chat/event/${eventId}`, 'GET');
  const [messages, setMessages] = useState();

  console.log(userInfos);

  useEffect(() => {
if (!historic) return;
setMessages(historic);
}, [historic]);

const getMessage = (message) => {
  console.log(message);
  setMessages((prev) => {
    const newMessages = [message, ...prev];
    return newMessages;
});
console.log(messages);
};

console.log(historic);

  return (
    <div className="bg-neutral-focus shadow-xl border rounded-xl border-gray-700 w-full">
      <h2 className="text-2xl p-4">Messages</h2>
      <div className="flex flex-col-reverse gap-2 p-2 overflow-y-auto w-full min-h-0 bg-neutral-focus h-[60vh] shadow-xl rounded-xl border-gray-700 rounded-b-none rounded-t-none border-t-0 sm:h-[50vh]">
        {
messages && messages.map((message, index) => {
            let sameDate = false;
            let sameAuthor = false;
            if (index >= 1) {
              sameDate = isDateEquals(
                message.date,
                historic[index - 1].createdAt,
              );
              sameAuthor = message.userId === historic[index - 1].userId;
         return (
           <ChatMessage
             author={message.user.username}
             message={message.message}
             key={message.id}
             avatar={message.user.avatar}
             createdAt={message.createdAt}
             userIdMessage={message.user.id}
             displayDateMessage={sameDate}
            //  displayAuthor={sameAuthor}
             userId={userId}

           />
         );
     }
       return (
         <ChatMessage
           author={message.user.username}
           message={message.message}
           key={message.id}
           avatar={message.user.avatar}
           createdAt={message.createdAt}
           userIdMessage={message.user.id}
           displayDateMessage={sameDate}
           displayAuthor={sameAuthor}
           userId={userId}

         />
       );
})
}
      </div>
      <ChatForm
        eventId={eventId}
        userId={userId}
        avatar={userInfos?.image_url}
        username={userInfos?.username}
        getMessage={getMessage}
      />
    </div>
  );
}

export default Chat;
