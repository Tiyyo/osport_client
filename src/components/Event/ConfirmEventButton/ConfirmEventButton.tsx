import React from 'react';
import axiosInstance from '../../../services/axiosInstance';

interface ButtonProps {
  userId: number;
  creatorId: number;
  eventId: number;
  status: string;
}

function ConfirmEventButton({ userId, creatorId, eventId, status }: ButtonProps) {
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

  return (
    <div className="bg-neutral-focus p-4 shadow-xl border rounded-xl border-base-300 w-full text-center">
      {/* Bouton qui exécutera la fonction handleClick avec les paramètres userId et eventId */}
      {status === 'open' && userId === creatorId
        ? <button className="btn btn-disabled" tabIndex="-1" type="button" aria-disabled="true">Waiting for confirmation</button>
        : (
          <button
            className="btn btn-wide btn-ghost border-gray-500 sm:btn-lg"
            onClick={() => handleClick(userId, eventId)}
            type="button"
          >
            Confirm event
          </button>
      )}

    </div>
  );
}

export default ConfirmEventButton;
