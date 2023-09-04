import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import levelNumberToString from '../../../utils/levelNumberToString';
import AuthContext from '../../../context/AuthContext';
import axiosInstance from '../../../services/axiosInstance';
import capitalize from '../../../utils/capitalize';
import type { Sport } from '../../types';

interface ProfileInfosInterface {
username : string;
avatar : string;
sports : Sport[]
}

function ProfileInfo({ username, avatar, sports } : ProfileInfosInterface) {
const { setIsAuth } = useContext(AuthContext);
const [sportChosen, setSportChosen] = useState<'Football' | 'BasketBall'>('Football');

const logout = async () => {
    setIsAuth(false);
    await axiosInstance.post('/logout');
};

const handleClickLogout = () => {
    logout();
};

const handleChangeSport = (e) => {
setSportChosen(e.target.value);
};

const displayCurrentSport = (arraySport : Sport[]) : string => {
const currentSport = arraySport
  .find((sport) => sport.name.toLowerCase() === sportChosen.toLowerCase());
const convertedRating = levelNumberToString(currentSport?.gb_rating);
return convertedRating;
};

  return (
    <div className="flex flex-col h-content gap-4 pb-4 px-5 m-auto w-full h-80
      shadow-xl border border-gray-700 rounded-xl mb-2 bg-neutral-focus sm:mb-0"
    >
      <div className="flex flex-col items-center justify-between w-full">

        <div className="flex items-center gap-4 p-4 sm:self-start">
          <div className="avatar">
            <div className="w-14 rounded-full">
              {
                avatar ? <img src={avatar} alt={`${username} avatar`} />
              : <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt={`${username} avatar`} />
            }
            </div>
          </div>
          { username && (<h1 className="text-3xl">{capitalize(username)}</h1>)}
        </div>
        <div className="px-4 flex justify-center sm:self-end">
          <Link to="/edit_profile">
            <button type="button" className="btn btn-xs m-2">Edit profile</button>
          </Link>
          <button type="button" className="btn btn-xs m-2" onClick={handleClickLogout}>Logout</button>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-evenly items-center gap-4">

        <div className="form-control w-full px-4 gap-4">
          <label className="label-text text-xl" htmlFor="sport">Check your level</label>
          <select className="select select-bordered select-sm" onChange={handleChangeSport}>
            <option disabled selected>{sportChosen}</option>
            <option>Football</option>
            <option>Basketball</option>
          </select>
        </div>
        {sports && (<div className="badge badge-base p-5 font-bold sm:badge-lg">{displayCurrentSport(sports)}</div>)}
      </div>

    </div>
  );
}

export default ProfileInfo;
