import React from 'react';

function CreateEventForm() {
  return (
    <div className="flex flex-col items-left w-full m-auto gap-6 py-4 sm:flex-row">
      <div className="flex flex-col gap-3">
        <label htmlFor="sport" className="text-lg">Chose a sport</label>
        <select className="select select-bordered select-sm bg-neutral-focus m-auto w-full">
          <option disabled selected>Pick one</option>
          <option>Football</option>
          <option>Basket-ball</option>
        </select>
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="sport" className="text-lg">Chose a date</label>
        <input type="date" name="date" id="date" className="bg-neutral-focus border border-gray-500 rounded-xl px-3 py-1 m-auto w-full" />
      </div>
    </div>
  );
}

export default CreateEventForm;
