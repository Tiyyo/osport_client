import React from 'react';
import { Link } from 'react-router-dom';

function List() {
  return (
    <ul className="w-full px-5">
      <li className="bg-neutral-focus flex flex-col items-center gap-2 pb-10 shadow-xl border border-gray-700 rounded-xl py-2 px-6 my-4 sm:items-center sm:justify-between">
        <div className="flex justify-between w-full">
          <div className="stat-title text-sm text-success sm:text-2xl">WIN</div>
          <div className="text-right">
            <div className="stat-desc text-sm sm:text-lg">20/05/2023</div>
            <div className="stat-desc text-xs sm:text-base">Football</div>
          </div>
        </div>
        <div className="flex flex-col items-center sm:gap-2 sm:pb-0">
          <div className="stat-value text-4xl sm:text-5xl">2-1</div>
          <Link to="/event">
            <p className="link sm:text-lg">View Event</p>
          </Link>
        </div>
      </li>
      <li className="bg-neutral-focus flex flex-col items-center gap-2 pb-10 shadow-xl border border-gray-700 rounded-xl py-2 px-6 my-4 sm:items-center sm:justify-between">
        <div className="flex justify-between w-full">
          <div className="stat-title text-sm text-error sm:text-2xl">LOSE</div>
          <div className="text-right">
            <div className="stat-desc text-sm sm:text-lg">13/04/2023</div>
            <div className="stat-desc text-xs sm:text-base">Basket-ball</div>
          </div>
        </div>
        <div className="flex flex-col items-center sm:gap-2 sm:pb-0">
          <div className="stat-value text-4xl sm:text-5xl">20-12</div>
          <Link to="/event">
            <p className="link sm:text-lg">View Event</p>
          </Link>
        </div>
      </li>
      <li className="bg-neutral-focus flex flex-col items-center gap-2 pb-10 shadow-xl border border-gray-700 rounded-xl py-2 px-6 my-4 sm:items-center sm:justify-between">
        <div className="flex justify-between w-full">
          <div className="stat-title text-sm text-success sm:text-2xl">WIN</div>
          <div className="text-right">
            <div className="stat-desc text-sm sm:text-lg">01/04/2023</div>
            <div className="stat-desc text-xs sm:text-base">Football</div>
          </div>
        </div>
        <div className="flex flex-col items-center sm:gap-2 sm:pb-0">
          <div className="stat-value text-4xl sm:text-5xl">5-0</div>
          <Link to="/event">
            <p className="link sm:text-lg">View Event</p>
          </Link>
        </div>
      </li>
    </ul>
  );
}

export default List;
