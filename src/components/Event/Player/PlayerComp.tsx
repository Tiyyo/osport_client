import React, { useContext, useRef, useState } from 'react';
import CircleEllipsis from '../../../assets/Icons/CircleEllipsis';
import PlayerDefaultIcon from '../../../assets/PlayerDefaultIcon.svg';
import ValidCheck from '../../../assets/Icons/ValidCheck';
import AuthContext from '../../../context/AuthContext';

type Status = 'pending' | 'accepted' | 'rejected';

interface PlayerProps {
  id : number;
  avatar : string;
  username : string;
  status : Status;
  sportId?: number;
  isConfirmed?: boolean;
}

function PlayerComp({
 id, avatar, username, status, sportId, isConfirmed,
} : PlayerProps) {
  const { user: { userInfos: { userId } } } = useContext(AuthContext);

const ratingModal = useRef<HTMLDialogElement>(null);

  function openModal() {
    if (isConfirmed) {
    window.ratingModal.showModal();
    }
  }

  function closeModal() {
    window.my_modal_3.close();
}

// async function rateUser(
//     userRating: number,
//     playerToRateId: number,
//     sportId: number,
//   userId: number,
// ) {
//       console.log(userRating, playerToRateId, sportId, userId);
//     try {
//       const res = await axiosInstance.patch(
// 'user/sport',
//          { rating: userRating,
//            user_id: id,
//            sport_id: sportId,
//            rater_id: userId },
// );
//       console.log('Server Response:', res);
//       } catch (error) {
//       console.log(error);
//     }
//   }

  const handleSubmit = (e: any) => {
    // e.preventDefault();
    // On défini la valeur finale grâce à setSearch et à l'inputValue
    // (tel qu'il est au moment du submit)
    // const userRating = e.target.userRating.value;
    // rateUser(userRating, id, sportId, userId);
    // On remet la valeur de l'input vide pour réinitialiser ce dernier
    // setInputValue(null);
    // On ferme la modal
    // closeModal();
  };

  return (
    <>
      <div
        key={id}
        className="flex flex-col items-center justify-center gap-y-1"
        onClick={openModal}
      >
        <div className="w-12 aspect-square rounded-full sm:w-14 overflow-hidden">
          {avatar
                ? <img src={avatar} alt={username} className="object-cover w-full" />
                 : <img src={PlayerDefaultIcon} alt={username} />}
        </div>
        <p className="flex text-center text-xs gap-1 items-center justify-center">
          {username}
          <span>
            {status === 'pending' ? <CircleEllipsis /> : <ValidCheck /> }
          </span>
        </p>
      </div>
      <dialog id="rating_component" className="modal" ref={ratingModal}>
        <form
          method="dialog"
          className="modal-box flex flex-col items-center gap-4 py-12"
          onSubmit={handleSubmit}
        >
          {/* Le button pour fermer ne fonctionne pas avec le type="button" (modal DaisyUI)  */}
          {/* eslint-disable-next-line react/button-has-type */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="font-bold text-lg mb-2">Chose a note between 1 to 10</h3>
          <div className="flex justify-center w-full">
            <input
              type="number"
              name="userRating"
              id="userRating"
              min={1}
              max={10}
              onChange={(e) => setInputValue(e.target.value)}
              className="p-4 bg-neutral shadow-xl border rounded-xl rounded-r-none border-gray-700 w-24 text-center text-xl font-bold"
            />
            <button type="submit" className="btn btn-lg m-0 rounded-l-none">Rate</button>
          </div>
          <p
            className="text-sm pt-8"
            onClick={closeModal}
          >
            Press ESC key or click on ✕ button to close

          </p>
        </form>
      </dialog>
    </>

  );
}

export default PlayerComp;
