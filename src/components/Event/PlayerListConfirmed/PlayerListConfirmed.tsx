import React from 'react';

interface PlayersListProps {
  players: PlayerObject[];
  nbPlayers: number;
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

function PlayerListConfirmed({ players, nbPlayers }: PlayersListProps) {
  // Fonction pour définir le nombre de colonnes à indiquer dans la classe de la <div>
  // en fonction du nombre de joueurs max. (qu'on divise par 2)
  function colsNumber(nbOfPlayers: number) {
    return `grid grid-cols-${nbOfPlayers / 2} gap-8 p-5`;
  }

  return (
    <div className="flex flex-col items-center gap-2 bg-neutral-focus py-8 shadow-xl border rounded-xl border-gray-700 w-full h-full">

      {/* Première équipe */}
      <h2 className="text-2xl text-center py-2">Team 1</h2>

      {/* La classe de la <div> changera automatiquement selon le nombre de joueurs max. */}
      {players && (
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
              <img src={player.user.avatar} alt={player.user.username} />
            </div>
          </div>
        ))}
      </div>
      )}

      {/* Séparateur entre les 2 équipes */}
      <div className="divider px-10 my-8">VS</div>

      {/* Deuxième équipe */}
      <h2 className="text-2xl text-center py-2">Team 2</h2>

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
              <img src={player.user.avatar} alt={player.user.username} />
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default PlayerListConfirmed;
