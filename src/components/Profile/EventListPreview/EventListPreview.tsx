import React from 'react';

function EventListPreview() {
  return (
    <div className="stats stats-vertical shadow w-3/5 shadow-xl border border-gray-700 rounded-xl m-1 mb-6 px-2 bg-neutral-focus">
      <div className="flex items-center justify-between p-2">
        <div className="stat-title text-lg text-success">WIN</div>
        <div className="stat-value text-lg">2-1</div>
        <div className="stat-desc text-base">20/05/2023</div>
        <div className="stat-desc text-base">Football</div>
      </div>
      <div className="flex items-center justify-between p-2">
        <div className="stat-title text-lg text-error">LOSE</div>
        <div className="stat-value text-lg">20-12</div>
        <div className="stat-desc text-base">13/04/2023</div>
        <div className="stat-desc text-base">Basket-ball</div>
      </div>
      <div className="flex items-center justify-between p-2">
        <div className="stat-title text-lg text-success">WIN</div>
        <div className="stat-value text-lg">5-0</div>
        <div className="stat-desc text-base">01/04/2023</div>
        <div className="stat-desc text-base">Football</div>
      </div>
    </div>
  );
}

export default EventListPreview;
