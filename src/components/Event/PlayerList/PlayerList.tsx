import React from 'react';
import PlayerComp from '../Player/PlayerComp';
import { Player, Players } from '../interface';
// We accept only picsum url for faker user or
// pixabay for user without avatar
import userAvatarOrigin from '../../../utils/regex';

function PlayerList({ players }: Players) {
  return (
    <div className="bg-neutral-focus p-4 shadow-sm rounded-xl border border-base-300 w-full h-full">
      <h2 className="text-3xl pb-4">Players</h2>
      <div className="flex gap-7 flex-wrap justify-center p-4 py-6">

        {/* On map sur la liste des joueurs pour générer les avatars des particpants du match
        (sans équipes attribuées pour l'instant) */}
        {/* "avatar flex self-start items-center justify-center gap-6 w-full cursor: text" */}
        {players && players.map((player: Player) => {
              if (player.status === 'rejected') return null;
              return (
                <PlayerComp
                  key={player.user.id}
                  avatar={userAvatarOrigin.test(player.user.avatar)
                    ? player.user.avatar
                    : import.meta.env.VITE_SERVER_URL + player.user.avatar}
                  username={player.user.username}
                  status={player.status}
                  id={player.user.id}
                />
              );
        })}
      </div>
    </div>
  );
}

export default PlayerList;
