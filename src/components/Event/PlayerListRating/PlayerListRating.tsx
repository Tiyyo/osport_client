/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useState } from 'react';
import axiosInstance from '../../../services/axiosInstance';
import TeamWin from './TeamResultTitle/TeamWin';
import TeamLose from './TeamResultTitle/TeamLose';
import TeamDraw from './TeamResultTitle/TeamDraw';

interface PlayersListProps {
  players: PlayerObject[];
  nbPlayers: number;
  firstTeamScore: number;
  secondTeamScore: number;
}

interface PlayerObject {
  user?: UserObject;
  team: number;
}

interface UserObject {
  id: number;
  team: number;
  avatar: string;
  username: string;
}

function PlayerListRating({ players, nbPlayers, firstTeamScore, secondTeamScore }: PlayersListProps) {
    // Fonction pour définir le nombre de colonnes à indiquer dans la classe de la <div>
  // en fonction du nombre de joueurs max. (qu'on divise par 2)
  function colsNumber(nbOfPlayers: number) {
    return `grid grid-cols-${nbOfPlayers / 2} gap-8 p-5`;
  }

  function openModal() {
      window.my_modal_3.showModal();
    }

  const [inputValue, setInputValue] = useState<number>(null);
  const [ratedUserId, setRatedUserId] = useState<number>(null);

  async function addContact(userRating: number, playerToRateId: number, sportId: number, userId: number) {
    try {
      const res = await axiosInstance.post('user/sport', { rating: userRating, user_id: playerToRateId, sport_id: sportId, rater_id: userId });
      console.log('Server Response:', res);
      } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // On défini la valeur finale grâce à setSearch et à l'inputValue
    // (tel qu'il est au moment du submit)
    addContact(userRating, playerToRateId, sportId, userId);
    // On remet la valeur de l'input vide pour réinitialiser ce dernier
    setInputValue(null);
  };

  return (
    <div className="flex flex-col items-center py-8 bg-neutral-focus p-4 shadow-xl border rounded-xl border-gray-700 w-full h-full">

      {/* Première équipe */}

      {/* // Nested ternary pour afficher le composant qui affiche l'équipe avec la bonne couleur
      // Si les scores sont égaux, on affiche <TeamDraw />
      // Si le score n'est pas égal et que le score de la première équipe est supérieur,
      // on affiche <TeamWin />
      // sinon on affiche <TeamLose /> */}
      {
        firstTeamScore === secondTeamScore
        ? <TeamDraw team="Team 1" />
        : firstTeamScore > secondTeamScore
        ? <TeamWin team="Team 1" />
        : <TeamLose team="Team 1" />
      }

      {/* La classe de la <div> changera automatiquement selon le nombre de joueurs max. */}
      {nbPlayers && (
      <div className={colsNumber(nbPlayers)}>

        {/* On filtre les joueurs pour n'afficher que ceux de la l'équipe 1
        On map sur le tableau qui a été filter pour générer les avatars */}
        {players && players
        .filter((player) => player.team === 1)
        .map((player: PlayerObject) => (
          <div
            key={player.user.id}
            className="avatar flex self-start items-center gap-6 w-full"
          >
            <div className="w-12 rounded-full sm:w-14">
              <img
                src={player.user.avatar}
                alt={player.user.username}
                onClick={openModal}
              />
            </div>
          </div>
        ))}
      </div>
      )}

      {/* Séparateur entre les 2 équipes */}

      <div className="divider px-6 my-6">VS</div>

      {/* Deuxième équipe */}

      {/* Même procédé que pour la première équipe en inversant la comparaison */}
      {
        firstTeamScore === secondTeamScore
        ? <TeamDraw team="Team 2" />
        : firstTeamScore < secondTeamScore
        ? <TeamWin team="Team 2" />
        : <TeamLose team="Team 2" />
      }

      {/* Même procédé que pour la première équipe */}
      {nbPlayers && (
      <div className={colsNumber(nbPlayers)}>
        {players && players
        .filter((player) => player.team === 2)
        .map((player: PlayerObject) => (
          <div
            key={player.user.id}
            className="avatar flex self-start items-center gap-6 w-full"
          >
            <div className="w-12 rounded-full sm:w-14">
              <img
                src={player.user.avatar}
                alt={player.user.username}
                onClick={openModal}
              />
            </div>
          </div>
        ))}
      </div>
      )}

      <p className="bg-neutral p-4 shadow-xl border rounded-xl border-gray-700 text-center mx-1 my-4 sm:m-4">
        You can rate other players by clicking their profile pictures
      </p>

      <dialog id="my_modal_3" className="modal">
        <form
          method="dialog"
          className="modal-box flex flex-col items-center gap-4 py-12"
        >
          {/* Le button pour fermer ne fonctionne pas avec le type="button" (modal DaisyUI)  */}
          {/* eslint-disable-next-line react/button-has-type */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="font-bold text-lg mb-2">Chose a note between 1 to 10</h3>
          <div className="flex justify-center w-full">
            <input
              type="number"
              min={1}
              max={10}
              onChange={(e) => setInputValue(e.target.value)}
              className="p-4 bg-neutral shadow-xl border rounded-xl rounded-r-none border-gray-700 w-24 text-center text-xl font-bold"
            />
            <button type="button" className="btn btn-lg m-0 rounded-l-none">Rate</button>
          </div>
          <p className="text-sm pt-8">Press ESC key or click on ✕ button to close</p>
        </form>
      </dialog>
    </div>
  );
}

export default PlayerListRating;
