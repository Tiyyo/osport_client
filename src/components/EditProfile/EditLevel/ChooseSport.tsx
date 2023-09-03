import React from 'react';

function ChooseSport() {
  return (
    <div className="form-control w-full px-6 gap-4">
      <label className="label-text text-base" htmlFor="sport">Select a sport to chose a level</label>
      <select className="select select-bordered text-neutral-content">
        <option disabled selected>Pick a sport</option>
        <option >
          Football
        </option>
        <option>
          Basket
        </option>
      </select>
      <select className="select select-bordered text-neutral-content">
        <option disabled selected>Pick a Level</option>
        <option> Débutant</option>
        <option> Intermédiaire</option>
        <option> Avancé</option>
      </select>
    </div>
  );
}

export default ChooseSport;
