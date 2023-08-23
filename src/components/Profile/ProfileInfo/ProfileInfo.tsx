import React from 'react';
import { Link } from 'react-router-dom';

function ProfileInfo() {
  return (
    <div className="flex flex-col h-content gap-4 pb-4 px-5 items-center w-full h-80 shadow-xl border border-gray-700 rounded-xl m-1 mb-2 bg-neutral-focus sm:mb-0">
      <div className="flex flex-col items-center justify-between w-full">

        <div className="flex items-center gap-4 p-4 sm:self-start">
          <div className="avatar">
            <div className="w-14 rounded-full">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user_avatar" />
            </div>
          </div>

          <h1 className="text-4xl">John Doe</h1>

        </div>

        <div className="px-4 flex justify-center sm:self-end">
          <Link to="/edit_profile">
            <button type="button" className="btn btn-xs m-2">Edit profile</button>
          </Link>
          <button type="button" className="btn btn-xs m-2">Logout</button>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-evenly items-center gap-4">

        <div className="form-control w-full px-4 gap-4">
          <label className="label-text text-xl" htmlFor="sport">Check your level</label>
          <select className="select select-bordered select-sm">
            <option disabled selected>Pick one sport</option>
            <option>Football</option>
            <option>Basket-ball</option>
          </select>
        </div>
        <div className="badge badge-base p-5 font-bold sm:badge-lg">Intermediate</div>
      </div>

    </div>
  );
}

export default ProfileInfo;
