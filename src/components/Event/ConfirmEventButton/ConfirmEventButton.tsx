import React, { useEffect } from 'react';
import axiosInstance from '../../../services/axiosInstance';
import type { Participant } from '../../types';

interface ButtonProps {
  userId: number;
  eventId: number;
  participants: Participant[];
  requiredPlayers : number
}

function ConfirmEventButton({
 userId, eventId, participants, requiredPlayers,
}: ButtonProps) {
    const [eventIsFull, setEventIsFull] = React.useState(false);

function checkIfEventIsFull() {
  const confirmedParticipants = participants
    .filter((participant) => participant.status === 'accepted');
    if (confirmedParticipants.length === requiredPlayers) {
      setEventIsFull(true);
    }
  }

  // Fonction pour valider l'évènement via la route /event/validate (PATCH)
  // Avec l'id de l'utilisateur et l'id de l'event en paramètres
  async function handleClick(accountId: number, matchId: number) {
    try {
      const res = await axiosInstance.patch('event/validate', { userId: accountId, eventId: matchId });
      console.log('Server Response:', res);
    } catch (error) {
      console.log(error);
    }
  }

useEffect(() => {
  if (!participants) return;
  checkIfEventIsFull();
}, [participants]);

  return (
    <div className="bg-neutral-focus p-4 shadow-xl border rounded-xl border-gray-700 w-full text-center">
      {/* Bouton qui exécutera la fonction handleClick avec les paramètres userId et eventId */}
      <button
        className="btn btn-wide sm:btn-lg"
        onClick={() => handleClick(userId, eventId)}
        type="button"
        disabled={!eventIsFull}
      >
        Confirm event
      </button>
    </div>
  );
}

export default ConfirmEventButton;
