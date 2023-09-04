import React, { useRef, useId } from 'react';
import RefresIcon from '../../../assets/Icons/RefresIcon';
import axiosInstance from '../../../services/axiosInstance';

function ChatForm({
 eventId, userId, getMessage, username, avatar,
}) {
const messageForm = useRef();
const tempId = useId();

const postMessage = async (data) => {
    try {
      const res = await axiosInstance.post('/chat', data);
    } catch (error) {
      console.log(error);
    }
};

  const handleSubmit = (e) => {
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
      messageForm.current?.reset();
};

const handleClick = () => {
    window.location.reload();
};

  return (
    <div className="flex w-full justify-center gap-3">
      <form onSubmit={handleSubmit} className="w-[90%]" ref={messageForm}>
        <input name="message" id="message" type="text" placeholder="Type here" className="input input-bordered w-full rounded-t-none" />
      </form>
      <button type="button" onClick={handleClick} className=" ">
        <RefresIcon />
      </button>
    </div>
  );
}

export default ChatForm;
