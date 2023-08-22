import React from 'react';

function ProfileInfo() {
  return (
    <div className="flex flex-col items-center w-full h-80 shadow-xl border border-gray-700 rounded-xl m-1 mb-6 bg-neutral-focus">
      <div className="flex items-center justify-between w-full">

        <div className="flex items-center gap-6 p-4">
          <div className="avatar">
            <div className="w-20 rounded-full">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user_avatar" />
            </div>
          </div>

          <h1 className="text-4xl">John Doe</h1>

        </div>

        <div className="px-4">
          <button type="button" className="btn btn-xs m-2">Edit profile</button>
          <button type="button" className="btn btn-xs">Logout</button>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-evenly items-center">

        <div className="form-control w-full max-w-xs gap-4">
          <label className="label-text text-xl" htmlFor="sport">Check your level</label>
          <select className="select select-bordered select-sm">
            <option disabled selected>Pick one sport</option>
            <option>Football</option>
            <option>Basket-ball</option>
          </select>
        </div>
        <div className="badge badge-lg p-5 font-bold">Intermediate</div>
      </div>

    </div>
  );
}

export default ProfileInfo;
