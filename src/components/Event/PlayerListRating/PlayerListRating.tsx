import React from 'react';

function PlayerListRating() {
function openModal() {
    window.my_modal_3.showModal();
  }

  return (
    /* Comme pour le composant de la liste des joueurs PlayerList,
    on génère les cols/rows et l'affichage des joueurs avec les données récupérées sur l'event
    Les avatars sont cliquables pour faire apparaître un input et choisir la note attribuée */
    <div className="flex flex-col items-center py-8 bg-neutral-focus p-4 shadow-xl border rounded-xl border-gray-700 w-full h-full">
      {/* Premiére équipe */}
      <h2 className="text-2xl text-center py-2 text-success">Team 1</h2>
      <div className=" grid grid-cols-5 gap-8 p-5">
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="avatar"
              onClick={openModal}
            />
          </div>
        </div>
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="avatar"
              onClick={openModal}
            />
          </div>
        </div>
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="avatar"
              onClick={openModal}
            />
          </div>
        </div>
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="avatar"
              onClick={openModal}
            />
          </div>
        </div>
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="avatar"
              onClick={openModal}
            />
          </div>
        </div>
      </div>

      {/* Séparateur entre les 2 équipes */}

      <div className="divider px-6 my-6">VS</div>

      {/* Deuxième équipe */}

      <h2 className="text-2xl text-center py-2 text-error">Team 2</h2>
      <div className="grid grid-cols-5 gap-8 p-5">
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img 
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="avatar"
              onClick={openModal} />
          </div>
        </div>
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="avatar"
              onClick={openModal}
            />
          </div>
        </div>
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="avatar"
              onClick={openModal}
            />
          </div>
        </div>
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="avatar"
              onClick={openModal}
            />
          </div>
        </div>
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="avatar"
              onClick={openModal}
            />
          </div>
        </div>
      </div>
      <p className="bg-neutral p-4 shadow-xl border rounded-xl border-gray-700 text-center mx-1 my-4 sm:m-4">
        You can rate other players by clicking their profile pictures
      </p>

      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box flex flex-col items-center gap-4 py-12">
          {/* Le button pour fermer ne fonctionne pas avec le type="button" (modal DaisyUI)  */}
          {/* eslint-disable-next-line react/button-has-type */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="font-bold text-lg mb-2">Chose a note between 1 to 10</h3>
          <div className="flex justify-center w-full">
            <input
              type="number"
              min={1}
              max={10}
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
