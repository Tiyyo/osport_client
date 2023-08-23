import React from 'react';

function ContactList() {
  return (
    // La liste sera générée via un .map une fois les données récupérées
    <ul className="w-full">
      <li className="bg-neutral-focus flex flex-col gap-6 shadow-xl border border-gray-700 rounded-xl py-2 px-6 my-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
          </div>
          <h1 className="text-2xl">John Doe</h1>
        </div>
        {/* Cette div sera affichée si l'utilisateur a une demande en attente,
            afin qu'il accepte ou refuse l'invitation reçue  */}
        <div className="flex gap-2 self-end sm:self-auto">
          <button type="button" className="btn btn-xs text-success">Accept</button>
          <button type="button" className="btn btn-xs text-error">Decline</button>
        </div>
      </li>

      <li className="bg-neutral-focus flex flex-col gap-6 shadow-xl border border-gray-700 rounded-xl py-2 px-6 my-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
          </div>
          <h1 className="text-2xl">John Doe</h1>
          {/* Cette div s'affichera quand l'utilisateur aura fait une demande d'ajout,
              en attendant la confirmation/refus du contact */}
        </div>
        {/* Le loader ne fonctionne pas pour l'instant */}
        <p className="self-end sm:self-auto">Waiting...</p>
      </li>
      {/* Contact ajouté dans la liste de l'utilisateur  */}
      <li className="bg-neutral-focus flex flex-col gap-6 shadow-xl border border-gray-700 rounded-xl py-2 px-6 my-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="avatar flex self-start items-center gap-6 w-full">
          <div className="w-12 rounded-full sm:w-14">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
          </div>
          <h1 className="text-2xl">John Doe</h1>
        </div>
      </li>
    </ul>
  );
}

export default ContactList;
