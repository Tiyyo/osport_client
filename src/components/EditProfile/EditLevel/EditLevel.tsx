import React, { useState, useEffect, useContext } from 'react';
import useFetch from '../../hooks/useFetch';
import AuthContext from '../../../context/AuthContext';
import SportRanking from '../LevelSelector/SportRanking';

function EditLevel() {

  const [sportSelected, setSportSelected] = useState<string>('Choice');

  const userId = useContext(AuthContext).user.userInfos.userId;
  const userSport = useFetch('/user/sport/' + userId, 'GET');
  const sports = (userSport.data);
  const ownRank = sports?.filter((sport: any) => sport.gb_rating !== 0 && sport.gb_rating !== null && sport.name === sportSelected).map((sport: any) => sport.gb_rating).pop();

  const handleChangeSport = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSportSelected(event.target.value);
  };

  return (
    <div className="flex flex-col shadow-xl bg-neutral-focus border border-gray-700 rounded-xl gap-6 py-4 items-center text-left sm:w-1/2">
      <h1 className="text-2xl">Your level</h1>

      <form className="form-control w-full px-6 gap-4">
        <label className="label-text text-base" htmlFor="sport">Select a sport to chose a level</label>
        <select className="select select-bordered text-neutral-content" value={sportSelected} onChange={handleChangeSport}>
          <option value="Choice" disabled className='font-bold italic'>Pick a sport</option>
          <option value='Football'>Football</option>
          <option value='Basketball'>Basket-ball</option>
        </select>
      </form>
      
      <SportRanking sportSelected={sportSelected} ownRank={ownRank} />
    </div>
  );
}

export default EditLevel;
