/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useContext, useState, useRef } from 'react';
import AuthContext from '../../../context/AuthContext';
import axiosInstance from '../../../services/axiosInstance';
import TeamResult from './TeamResultTitle/TeamResult';
import PlayerComp from '../Player/PlayerComp';
import type { Player } from '../interface';

interface PlayersListProps {
  players: Player[];
  nbPlayers: number;
  firstTeamScore: number;
  secondTeamScore: number;
  sportId: number;
}

function PlayerListRating({ players, nbPlayers, firstTeamScore, secondTeamScore, sportId }: PlayersListProps) {
  const { user: { userInfos: { userId } } } = useContext(AuthContext);
  const [userIdToRate, setUserIdToRate] = useState<number>(null);
  const formModal = useRef(null);

  function openModal(state) {
    window.ratingModal.showModal();
  }

  function getUserToRateId(userIdToRate) {
    setUserIdToRate(userIdToRate);
  }

  function closeModal() {
    window.ratingModal.close();
  }

  async function rateUser(userRating: number, playerToRateId: number, sportId: number, userId: number) {
    try {
      const res = await axiosInstance.patch(
  'user/sport',
         { rating: Number(userRating),
           user_id: playerToRateId,
           sport_id: sportId,
           rater_id: userId },
  );
      console.log('Server Response:', res);
      } catch (error) {
      console.log(error);
    }
  }

const handleSubmit = (e) => {
    e.preventDefault();
    const userRating = e.target.userRating.value;
    rateUser(userRating, userIdToRate, sportId, userId);
    formModal.current.reset();
    closeModal();
  };

  return (
    <div className="flex flex-col items-center py-8 bg-neutral-focus p-4 shadow-xl border rounded-xl border-gray-700 w-full h-full">

      {/* Première équipe */}

      <TeamResult scoreTeam1={firstTeamScore} scoreTeam2={secondTeamScore} team="Team 1" />

      {/* La classe de la <div> changera automatiquement selon le nombre de joueurs max. */}
      {nbPlayers && (
      <div className="flex gap-7 flex-wrap justify-center p-4 py-6">

        {/* On filtre les joueurs pour n'afficher que ceux de la l'équipe 1
        On map sur le tableau qui a été filter pour générer les avatars */}
        {players && players
        .filter((player) => player.team === 1)
        .map((player) => (
          <div onClick={openModal} key={player.user.id}>
            <PlayerComp
              id={player.user.id}
              avatar={player.user.avatar}
              status={player.status}
              username={player.user.username}
              sportId={sportId}
              getUserToRateId={getUserToRateId}
              isConfirmed
            />
          </div>
        ))}
      </div>
      )}

      {/* Séparateur entre les 2 équipes */}

      <div className="divider px-6 my-6">VS</div>

      {/* Deuxième équipe */}

      {/* Même procédé que pour la première équipe en inversant la comparaison */}
      <TeamResult scoreTeam1={secondTeamScore} scoreTeam2={firstTeamScore} team="Team 2" />

      {/* Même procédé que pour la première équipe */}
      {nbPlayers && (
      <div className="flex gap-7 flex-wrap justify-center p-4 py-6">
        {players && players
        .filter((player) => player.team === 2)
        .map((player) => (
          <div onClick={openModal} key={player.user.id}>
            <PlayerComp
              id={player.user.id}
              avatar={player.user.avatar}
              status={player.status}
              username={player.user.username}
              sportId={sportId}
              getUserToRateId={getUserToRateId}
              isConfirmed
            />
          </div>
        ))}
      </div>
      )}

      <p className="bg-neutral p-4 shadow-xl border rounded-xl border-gray-700 text-center mx-1 my-4 sm:m-4">
        You can rate other players by clicking their profile pictures
      </p>
      <dialog id="ratingModal" className="modal">
        <form
          method="dialog"
          className="modal-box flex flex-col items-center gap-4 py-12"
          onSubmit={handleSubmit}
          ref={formModal}
        >
          {/* Le button pour fermer ne fonctionne pas avec le type="button" (modal DaisyUI)  */}
          {/* eslint-disable-next-line react/button-has-type */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="font-bold text-lg mb-2">
            {/* Le texte change si l'id de l'utilisateur à noter est le même que celui de l'utilisateur connecté */}
            {userIdToRate === userId ? 'You are not allowed to rate yourself !' : 'Chose a note between 1 to 10'}
          </h3>
          <div className="flex justify-center w-full">
            <input
              type="number"
              name="userRating"
              id="userRating"
              min={1}
              max={10}
              // Si l'id de l'utilisateur à noter est le même que celui de l'utilisateur connecté, on désactive le bouton et l'input
              className={userIdToRate === userId
                ? 'p-4 bg-neutral btn-disabled shadow-xl border rounded-xl rounded-r-none border-gray-700 w-24 text-center text-xl font-bold'
                : 'p-4 bg-neutral shadow-xl border rounded-xl rounded-r-none border-gray-700 w-24 text-center text-xl font-bold'}
            />
            <button
              type="submit"
              className={userIdToRate === userId ? 'btn btn-disabled btn-lg m-0 rounded-l-none' : 'btn btn-lg m-0 rounded-l-none'}
            >
              Rate
            </button>
          </div>
          <p
            className="text-sm pt-8"
          >
            Press ESC key or click on ✕ button to close

          </p>
        </form>
      </dialog>
    </div>
  );
}

export default PlayerListRating;
