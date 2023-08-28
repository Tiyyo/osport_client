import React from 'react';

function CreateEventForm() {
  return (
    <div className="flex flex-col items-left justify-evenly w-full m-auto gap-6 pt-6 pb-8 bg-neutral-focus p-4 shadow-xl border rounded-xl border-gray-700">
      <h1 className="text-3xl sm:pb-4">New event</h1>
      <div className="flex flex-col gap-5 w-3/4 sm:flex-row sm:justify-evenly sm:w-full">
        <div className="flex flex-col gap-3">
          {/* On selectionne le sport pour créer l'event */}
          <label htmlFor="sport" className="text-lg sm:text-xl">Chose a sport</label>
          <select className="select select-bordered select-sm bg-base-100 m-auto w-full">
            <option disabled selected>Pick one</option>
            <option>Football</option>
            <option>Basket-ball</option>
          </select>
        </div>
        {/* Une fois le sport choisi on selectionne le nombre de participants */}
        <div className="flex flex-col gap-3">
          <label htmlFor="nb-particpant" className="text-lg sm:text-xl">Number of participants</label>
          <select className="select select-bordered select-sm bg-base-100 m-auto w-full">
            <option disabled selected>Chose Option</option>
            <option selected>3v3</option>
            <option>5v5</option>
          </select>
        </div>
        {/* On selectionne la date de l'event */}
        <div className="flex flex-col gap-3">
          <label htmlFor="sport" className="text-lg sm:text-xl">Chose a date</label>
          <input type="date" name="date" id="date" className="bg-base-100 border border-gray-600 rounded-xl px-3 py-1 m-auto w-full" />
        </div>
      </div>
    </div>
  );
}

export default CreateEventForm;