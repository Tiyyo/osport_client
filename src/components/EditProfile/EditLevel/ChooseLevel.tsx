import React from 'react';

function ChooseLevel({ currentSport, sport, level }) {
console.log(currentSport, sport, level);
  if (currentSport.toLowerCase() !== sport.toLowerCase()) return null;
  return (
    <select className="select select-bordered text-neutral-content">
      <option disabled selected>Pick a Level</option>
      <option> Débutant</option>
      <option> Intermédiaire</option>
      <option> Avancé</option>
    </select>
  );
}

export default ChooseLevel;
