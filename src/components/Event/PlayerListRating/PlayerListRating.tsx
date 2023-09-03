/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useContext, useState } from 'react';
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
    // Fonction pour définir le nombre de colonnes à indiquer dans la classe de la <div>
  // en fonction du nombre de joueurs max. (qu'on divise par 2)

  const { user: { userInfos: { userId } } } = useContext(AuthContext);

  function colsNumber(nbOfPlayers: number) {
    return `grid grid-cols-${nbOfPlayers / 2} gap-8 p-5`;
  }

//   function openModal() {
//     window.my_modal_3.showModal();
//   }

//   function closeModal() {
//     window.my_modal_3.close();
// }

  // const [inputValue, setInputValue] = useState<number | string>(null);
  // const [ratedUserId, setRatedUserId] = useState<number>(null);

  // async function rateUser(userRating: number, playerToRateId: number, sportId: number, userId: number) {
  //     console.log(userRating, playerToRateId, sportId, userId);
//     try {
//       const res = await axiosInstance.patch(
// 'user/sport',
//          { rating: userRating,
//            user_id: playerToRateId,
//            sport_id: sportId,
//            rater_id: userId },
// );
//       console.log('Server Response:', res);
//       } catch (error) {
//       console.log(error);
//     }
  // }

  return (
    <div className="flex flex-col items-center py-8 bg-neutral-focus p-4 shadow-xl border rounded-xl border-gray-700 w-full h-full">

      {/* Première équipe */}

      {/* // Nested ternary pour afficher le composant qui affiche l'équipe avec la bonne couleur
      // Si les scores sont égaux, on affiche <TeamDraw />
      // Si le score n'est pas égal et que le score de la première équipe est supérieur,
      // on affiche <TeamWin />
      // sinon on affiche <TeamLose /> */}

      <TeamResult scoreTeam1={firstTeamScore} scoreTeam2={secondTeamScore} team="Team 1" />

      {/* La classe de la <div> changera automatiquement selon le nombre de joueurs max. */}
      {nbPlayers && (
      <div className={colsNumber(nbPlayers)}>

        {/* On filtre les joueurs pour n'afficher que ceux de la l'équipe 1
        On map sur le tableau qui a été filter pour générer les avatars */}
        {players && players
        .filter((player) => player.team === 1)
        .map((player) => (
          <PlayerComp
            id={player.user.id}
            avatar={player.user.avatar}
            status={player.status}
            username={player.user.username}
            sportId={sportId}
            isConfirmed
          />
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
      <div className={colsNumber(nbPlayers)}>
        {players && players
        .filter((player) => player.team === 2)
        .map((player) => (
          <PlayerComp
            id={player.user.id}
            avatar={player.user.avatar}
            status={player.status}
            username={player.user.username}
            sportId={sportId}
            isConfirmed
          />
        ))}
      </div>
      )}

      <p className="bg-neutral p-4 shadow-xl border rounded-xl border-gray-700 text-center mx-1 my-4 sm:m-4">
        You can rate other players by clicking their profile pictures
      </p>

    </div>
  );
}

export default PlayerListRating;
