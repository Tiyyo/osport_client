import React, { useRef, useId } from 'react';
import axiosInstance from '../../../services/axiosInstance';

interface ChatFormProps {
  eventId: number;
  userId: number;
  getMessage: (message: any) => void;
  username: string;
  avatar: string;
}

function ChatForm({
 eventId, userId, getMessage, username, avatar,
}: ChatFormProps) {
const messageForm = useRef();
const tempId = useId();

const postMessage = async (data) => {
    try {
      const res = await axiosInstance.post('/chat', data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshChat = () => {
    window.location.reload();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const message = e.target.message.value;

      const data = {
            message,
            user_id: userId,
            event_id: eventId,
        };
      postMessage(data).then((res) => console.log(res));
      getMessage({
            id: tempId,
            event_id: eventId,
            message,
            created_at: new Date(),
            user: {
              id: userId,
              username,
              avatar,
      },
    });
    // messageForm.current?.reset();
    refreshChat();
  };

  return (
    <div className="flex w-full justify-center gap-3 border-t-2 border-neutral-focus">
      <form autoComplete="off" onSubmit={handleSubmit} className="w-full" ref={messageForm}>
        <input name="message" id="message" type="text" placeholder="Type here" className="input w-[85%] border-2 border-neutral-focus rounded-t-none" />
        <button type="submit" className="btn btn-ghost w-[15%]">Send</button>
      </form>
    </div>
  );
}

export default ChatForm;
