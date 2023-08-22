import React from 'react';

function ContactList() {
  return (
    // La liste sera générée via un .map une fois les données récupérées
    <ul className="w-full">
      <li className="bg-neutral-focus flex items-center justify-between shadow-xl border border-gray-700 rounded-xl py-2 px-6 my-4">
        <div className="avatar flex items-center justify-between w-3/5">
          <div className="w-16 rounded-full">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
          </div>
          <h1 className="text-3xl">John Doe</h1>
        </div>
        {/* Cette div sera affichée si l'utilisateur a une demande en attente,
            afin qu'il accepte ou refuse l'invitation reçue  */}
        <div className="flex flex-col gap-2">
          <button type="button" className="btn btn-xs text-success">Accept</button>
          <button type="button" className="btn btn-xs text-error">Decline</button>
        </div>
      </li>
      <li className="bg-neutral-focus flex items-center justify-between shadow-xl border border-gray-700 rounded-xl py-2 px-6 my-4">
        <div className="avatar flex items-center justify-between w-3/5">
          <div className="w-16 rounded-full">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
          </div>
          <h1 className="text-3xl">John Doe</h1>
          {/* Cette div s'affichera quand l'utilisateur aura fait une demande d'ajout,
              en attendant la confirmation/refus du contact */}
        </div>
        {/* <span className="loading loading-spinner loading-lg"></span> */}
        {/* Le loader ne fonctionne pas pour l'instant */}
        <p>Waiting...</p>
      </li>
      {/* Contact ajouté dans la liste de l'utilisateur  */}
      <li className="bg-neutral-focus flex items-center justify-between shadow-xl border border-gray-700 rounded-xl py-2 px-6 my-4">
        <div className="avatar flex items-center justify-between w-3/5">
          <div className="w-16 rounded-full">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
          </div>
          <h1 className="text-3xl">John Doe</h1>
        </div>
      </li>
    </ul>
  );
}

export default ContactList;
