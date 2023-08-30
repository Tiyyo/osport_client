import React from 'react';

function PlayerListConfirmed() {
  return (
    // Ce composant s'affichera sur la page une fois le statut du match confirmé
    // Premiere equipe à générer avec .map sur la premiere colonne,
    <div className="flex flex-col items-center gap-2 bg-neutral-focus py-8 shadow-xl border rounded-xl border-gray-700 w-full h-full">
      <h2 className="text-2xl text-center py-2">Team 1</h2>
      {/* le nb de cols sera défini par le choix fait l'organisateur (3v3/5v5) avec .map */}
      <div className=" grid grid-cols-5 gap-8 p-5">
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
      {/* Deuxieme equipe à générer avec .map sur la premiere colonne,
      même procédé que la 1ere équipe */}
      <div className="divider px-10 my-8">VS</div>
      <h2 className="text-2xl text-center py-2">Team 2</h2>
      <div className="grid grid-cols-5 gap-8 p-5">
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

export default PlayerListConfirmed;
