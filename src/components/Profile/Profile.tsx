import React from 'react';

function Profile() {
  return (
    <>
      <nav className="flex gap-4 p-4 justify-center">
        <button type="button" className="btn">Profile</button>
        <button type="button" className="btn">Contact</button>
        <button type="button" className="btn">Event</button>
      </nav>

      <div className="flex p-10">

        <div className="flex flex-col gap-4 items-center w-2/3">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="../../../public/imageedit_3_3008038748.png" alt="avatar" />
            </div>
          </div>

          <h1>Name</h1>

          <div>
            <button type="button" className="btn btn-xs">Edit profile</button>
            <button type="button" className="btn btn-xs">Logout</button>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label-text" htmlFor="sport">Chose a sport</label>
            <select className="select select-bordered select-sm">
              <option disabled selected>Pick one</option>
              <option>Football</option>
              <option>Basket-ball</option>
            </select>
            <div className="badge badge-lg">Intermediate</div>
          </div>

        </div>

        <div className="stats stats-vertical shadow w-1/3">
          <div className="flex items-center justify-between p-2">
            <div className="stat-title text-lg">WIN</div>
            <div className="stat-value text-lg">2-1</div>
            <div className="stat-desc text-base">20/05/2023</div>
            <div className="stat-desc text-base">Football</div>
          </div>
          <div className="flex items-center justify-between p-2">
            <div className="stat-title text-lg">LOSE</div>
            <div className="stat-value text-lg">20-12</div>
            <div className="stat-desc text-base">13/04/2023</div>
            <div className="stat-desc text-base">Basket-ball</div>
          </div>
        </div>

      </div>
      <div className="flex items-center justify-around p-2">
        <div className="stat-title text-lg">NEXT GAME</div>
        <div className="stat-value text-lg">19/07/2023</div>
        <div className="stat-desc text-base">Football</div>
      </div>

    </>
  );
}

export default Profile;