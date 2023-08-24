import React from 'react';

function EventListPreview() {
  return (
    <div className="stats w-full stats-vertical shadow w-3/5 shadow-xl border border-gray-700 rounded-xl mb-4 p-2 bg-neutral-focus sm:mb-0 sm:p-2">
      <h1 className="m-0 text-xl py-3 pl-1 h-fit w-fit sm:pb-0">Last results</h1>
      <div className="flex stat justify-evenly p-2 items-center sm:p-0">
        <div className="stat-title text-sm text-success sm:text-base">WIN</div>
        <div className="stat-desc text-xs sm:text-sm">20/05/2023</div>
        <div className="stat-value text-sm sm:text-base">2-1</div>
        <div className="stat-desc text-sm sm:text-base">Football</div>
      </div>
      <div className="flex stat justify-evenly p-2 items-center sm:p-0">
        <div className="stat-title text-sm text-error sm:text-base">LOSE</div>
        <div className="stat-desc text-xs sm:text-sm">13/04/2023</div>
        <div className="stat-value text-sm sm:text-base">20-12</div>
        <div className="stat-desc text-sm sm:text-base">Basket</div>
      </div>
      <div className="flex stat justify-evenly p-2 items-center sm:p-0">
        <div className="stat-title text-sm text-success sm:text-base">WIN</div>
        <div className="stat-desc text-xs sm:text-sm">01/04/2023</div>
        <div className="stat-value text-sm sm:text-base">5-0</div>
        <div className="stat-desc text-sm sm:text-base">Football</div>
      </div>
    </div>
  );
}

export default EventListPreview;
