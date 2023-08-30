import React from 'react';
import LevelSelector from '../LevelSelector/LevelSelector';

function EditLevel() {
  return (
    <div className="flex flex-col shadow-xl bg-neutral-focus border border-gray-700 rounded-xl gap-6 py-4 items-center text-left sm:w-1/2">
      <h1 className="text-2xl">Your level</h1>
      <div className="form-control w-full px-6 gap-4">
        <label className="label-text text-base" htmlFor="sport">Select a sport to chose a level</label>
        <select className="select select-bordered text-neutral-content">
          <option disabled selected>Pick a sport</option>
          <option>Football</option>
          <option>Basket-ball</option>
        </select>
      </div>
      <LevelSelector />
    </div>
  );
}

export default EditLevel;
