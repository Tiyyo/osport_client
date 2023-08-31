import React from 'react';

function ResultInput() {
  return (
    <div className="flex flex-col gap-4 py-4 justify-evenly w-full items-center bg-neutral-focus shadow-xl border rounded-xl border-gray-700 h-full min-[1100px]:flex-row">
      <div className="flex flex-col gap-2">
        <div className="flex justify-center">
          <div className="flex flex-col  items-center gap-3">
            <h3 className="font-bold">Team 1</h3>
            <input type="number" className="m-2 p-3 bg-base-100 shadow-xl border rounded-xl border-gray-700 w-14 text-center text-xl font-bold" />
          </div>
          <div className="divider divider-horizontal my-3" />
          <div className="flex flex-col  items-center gap-3">
            <h3 className="font-bold">Team 2</h3>
            <input type="number" className="m-2 p-3 bg-base-100 shadow-xl border rounded-xl border-gray-700 w-14 text-center text-xl font-bold" />
          </div>
        </div>
        <h3 className="text-center text-sm">Enter final score here</h3>
      </div>
      <button type="button" className="btn">Save result</button>
    </div>
  );
}

export default ResultInput;
