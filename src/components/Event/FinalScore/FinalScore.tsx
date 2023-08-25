import React from 'react';

function FinalScore() {
  return (
    <div className="flex flex-col gap-4 items-center px-6 bg-neutral-focus p-4 shadow-xl border rounded-xl border-gray-700 w-full h-full sm:flex-row sm:justify-evenly">
      <h2 className="text-2xl">Final Score</h2>
      <div className="flex p-4">
        <h4 className="text-3xl font-bold text-center text-success bg-base-100 py-2 px-3 shadow-xl border rounded-xl border-gray-700">2</h4>
        <div className="divider divider-horizontal" />
        <h4 className="text-3xl font-bold text-center text-error bg-base-100 py-2 px-3 shadow-xl border rounded-xl border-gray-700">1</h4>
      </div>
    </div>
  );
}

export default FinalScore;
