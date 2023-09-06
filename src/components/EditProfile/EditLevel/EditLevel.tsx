import React, { useState, useContext, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import AuthContext from '../../../context/AuthContext';
import SportRanking from '../LevelSelector/SportRanking';

function EditLevel() {
  const [sportSelected, setSportSelected] = useState<string>('Choice');
  const [rank, setRank] = useState();

  const { userId } = useContext(AuthContext).user.userInfos;
  const userSport = useFetch(`/user/own_rating/${userId}`, 'GET');

  useEffect(() => {
  const ownRank = userSport.data?.filter((sport: any) => sport.gb_rating !== 0 && sport.gb_rating !== null && sport.name === sportSelected).map((sport: any) => sport.rating).pop();
  setRank(ownRank);
  }, [userSport.loading, sportSelected]);

  const handleChangeSport = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSportSelected(event.target.value);
  };

  return (
    <div className="flex flex-col shadow-sm bg-neutral-focus border border-base-300 rounded-xl gap-6 py-4 items-center text-left sm:w-1/2">
      <h1 className="text-2xl">Your level</h1>

      <form className="form-control w-full px-6 gap-4">
        <label className="label-text text-base" htmlFor="sport">Select a sport to chose a level</label>
        <select className="select select-bordered text-neutral-content" value={sportSelected} onChange={handleChangeSport}>
          <option value="Choice" disabled className="font-bold italic">Pick a sport</option>
          <option value="Football">Football</option>
          <option value="Basketball">Basket-ball</option>
        </select>
      </form>

      <SportRanking sportSelected={sportSelected} ownRank={rank} />
    </div>
  );
}

export default EditLevel;
