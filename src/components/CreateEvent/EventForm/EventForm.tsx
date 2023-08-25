import React from 'react';

function CreateEventForm() {
  return (
    <div className="flex flex-col items-left justify-evenly w-full m-auto gap-6 py-4 sm:flex-row">
      <div className="flex flex-col gap-3">
        {/* On selectionne le sport pour créer l'event */}
        <label htmlFor="sport" className="text-lg sm:text-xl">Chose a sport</label>
        <select className="select select-bordered select-sm bg-neutral-focus m-auto w-full">
          <option disabled selected>Pick one</option>
          <option>Football</option>
          <option>Basket-ball</option>
        </select>
      </div>
      {/* Une fois le sport choisi on selectionne le nombre de participants */}
      <div className="flex flex-col gap-3">
        <label htmlFor="nb-particpant" className="text-lg sm:text-xl">Number of participants</label>
        <select className="select select-bordered select-sm bg-neutral-focus m-auto w-full">
          <option disabled selected>Chose Option</option>
          <option selected>3v3</option>
          <option>5v5</option>
        </select>
      </div>
      {/* On selectionne la date de l'event */}
      <div className="flex flex-col gap-3">
        <label htmlFor="sport" className="text-lg sm:text-xl">Chose a date</label>
        <input type="date" name="date" id="date" className="bg-neutral-focus border border-gray-500 rounded-xl px-3 py-1 m-auto w-full" />
      </div>
    </div>
  );
}

export default CreateEventForm;
