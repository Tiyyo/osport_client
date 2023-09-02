import React from 'react';

interface PlayersListProps {
  players: PlayerObject;
}

interface PlayerObject {
  map(arg0: (player: PlayerObject) => React.JSX.Element): React.ReactNode;
  user?: UserObject;
}

interface UserObject {
  id: number;
  avatar: string;
  username: string;
}

function PlayerList({ players }: PlayersListProps) {
  return (
    <div className="bg-neutral-focus p-4 shadow-xl border rounded-xl border-gray-700 w-full h-full">
      <h2 className="text-3xl pb-4">Players</h2>
      <div className="grid grid-cols-5 grid-rows-2 gap-4 gap-y-8 bg-base-100 p-4 shadow-xl border rounded-xl border-gray-700 h-3/4 p-14 justify-items-center">

        {/* On map sur la liste des joueurs pour générer les avatars des particpants du match 
        (sans équipes attribuées pour l'instant) */}
        {players && players.map((player: PlayerObject) => (
          <div
            key={player.user.id}
            className="avatar flex self-start items-center justify-center gap-6 w-full cursor: text"
          >
            <div className="w-12 rounded-full sm:w-14">
              <img src={player.user.avatar} alt={player.user.username} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayerList;
