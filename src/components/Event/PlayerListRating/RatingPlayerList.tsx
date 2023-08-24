import React from 'react';

function PlayerListRating() {
  return (
    /* Comme pour le composant de la liste des joueurs PlayerList,
    on génère les cols/rows et l'affichage des joueurs avec les données récupérées sur l'event
    Les avatars sont cliquables pour faire apparaître un input et choisir la note attribuée */
    <div className="py-6">
      <p className="text-sm bg-neutral mx-4 p-3 shadow-xl border border-gray-700 rounded-xl m-auto mb-8 sm:mx-auto sm:w-2/3">
        You can rate the others players by clicking on their profile pictures
      </p>

      {/* Premiére équipe */}
      <h2 className="text-2xl text-center py-2 text-success">Team 1</h2>
      <div className=" grid grid-cols-5 gap-4 p-5">
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
          </div>
        </div>
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
          </div>
        </div>
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
          </div>
        </div>
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
          </div>
        </div>
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
          </div>
        </div>
      </div>

      {/* Séparateur entre les 2 équipes */}

      <div className="divider px-6 my-6">VS</div>

      {/* Deuxième équipe */}

      <h2 className="text-2xl text-center py-2 text-error">Team 2</h2>
      <div className="grid grid-cols-5 gap-4 p-5">
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
          </div>
        </div>
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
          </div>
        </div>
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
          </div>
        </div>
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
          </div>
        </div>
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerListRating;
