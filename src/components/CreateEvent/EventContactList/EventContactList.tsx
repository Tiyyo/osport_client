import React from 'react';

function EventContactList() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <h2 className="text-lg">Chose teammates</h2>
      <ul className="w-full flex flex-col gap-4">
        <li className="flex justify-between items-center bg-neutral-focus flex shadow-xl border border-gray-700 rounded-xl p-2">
          <div className="avatar">
            <div className="w-8 rounded-full sm:w-14">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
            </div>
          </div>
          <h1 className="text-xl">John Doe</h1>
          <input type="checkbox" className="checkbox checkbox-sm" />
        </li>
        {/* Liste a generer via .map */}
        <li className="flex justify-between items-center bg-neutral-focus flex shadow-xl border border-gray-700 rounded-xl p-2">
          <div className="avatar">
            <div className="w-8 rounded-full sm:w-14">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
            </div>
          </div>
          <h1 className="text-xl">Denis Brogniard</h1>
          <input type="checkbox" checked={false} className="checkbox checkbox-sm" />
        </li>
      </ul>
    </div>
  );
}

export default EventContactList;
