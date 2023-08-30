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
    <div className="flex flex-col items-center justify-center gap-6 py-8 px-0 bg-neutral-focus p-4 shadow-xl border rounded-xl border-gray-700 sm:w-1/2 sm:h-fit">
      <h2 className="text-sm">
        <span className="badge badge-base-100 badge-lg mx-2 p-2">1</span>
        players on
        <span className="badge badge-base-100 badge-lg mx-2 p-2">{eventData.nbMaxParticipant}</span>
        required
      </h2>
      <button
        type="button"
        className="btn btn-wide"
        onClick={HandleSendInvitations}
      >
        Send Invitations
      </button>
    </div>
  );
}

export default SendInvitations;
