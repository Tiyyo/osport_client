import React from 'react';

function ProfileInfo() {
  return (
    <div className="flex flex-col items-center w-full h-80 shadow-xl border border-gray-700 rounded-xl m-1 mb-6">
      <div className="flex items-center justify-between w-full">

        <div className="flex items-center justify-left">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="../../../public/imageedit_3_3008038748.png" alt="avatar" />
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
