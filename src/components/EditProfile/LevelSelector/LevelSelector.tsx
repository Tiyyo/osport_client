import React from 'react';

function LevelSelector() {
  return (
    <div className="flex flex-col items-center form-control w-full px-6 gap-4">
      <label className="label-text text-base self-start" htmlFor="sport">Now you can chose your level</label>
      <select className="select select-bordered select text-neutral-content w-full">
        <option disabled selected>Chose your level</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Confirmed</option>
      </select>
      <button className="btn w-fit sm:mt-6" type="button">Save your level</button>
    </div>
  );
}

export default LevelSelector;
