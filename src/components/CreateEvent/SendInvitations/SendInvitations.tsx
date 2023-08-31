import React, { useContext } from 'react';
import axios from 'axios';
import type { EventContextProps } from '../../../context/EventContext';
import { EventContext } from '../../../context/EventContext';
// import useFetch from '../../hooks/useFetch';
import AuthContext from '../../../context/AuthContext';

function SendInvitations() {
  // On recupere l'id de l'user connecté
  const { user } = useContext(AuthContext);
  const id = user.userInfos.userId;

  const { eventData }: EventContextProps = useContext(EventContext);
  const eventDataWithUserId = { ...eventData, userId: id };

  const baseUrl = import.meta.env.VITE_SERVER_URL;

  const HandleSendInvitations = async () => {
    try {
      const response = await axios.post(`${baseUrl}/event`, eventDataWithUserId);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-8 px-4 bg-neutral-focus shadow-xl border rounded-xl border-gray-700 sm:w-1/2 sm:h-fit">
      <h2 className="text-sm flex items-center">
        {eventData.friends.length === eventData.nbMaxParticipant && (
          <img src="https://img.icons8.com/?size=512&id=63312&format=png" className="w-7" alt="valid" />
        )}
        {eventData.friends.length > eventData.nbMaxParticipant && (
          <img src="https://img.icons8.com/?size=512&id=63690&format=png" className="w-7" alt="valid" />
        )}
        <span className="badge badge-base-100 badge-lg mx-2 p-2">{eventData.friends.length}</span>
        players on
        <span className="badge badge-base-100 badge-lg mx-2 p-2">{eventData.nbMaxParticipant}</span>
        required
      </h2>

      <div className="flex flex-wrap gap-8 my-5 justify-center max-w-[500px]">
        {eventData.friends.map((friend) => (
          <div key={friend.id} className="flex items-center gap-2 flex-col">
            <div className="avatar">
              <div className="w-12 sm:w-16 rounded-full">
                <img src={friend.avatar} alt="avatar" />
              </div>
            </div>
            <span>{friend.username}</span>

          </div>
        ))}
      </div>

      <button
        type="button"
        className="btn btn-wide"
        disabled={eventData.friends.length > eventData.nbMaxParticipant}
        onClick={HandleSendInvitations}
      >
        Create the event
      </button>
    </div>
  );
}

export default SendInvitations;
