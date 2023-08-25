import React from 'react';

function EventContactList() {
  return (
    <div className="flex flex-col gap-3 w-full sm:w-1/2 sm:self-start bg-neutral-focus p-4 shadow-xl border rounded-xl border-gray-700">
      <h2 className="text-xl pb-6 sm:text-3xl">Chose participants</h2>
      <ul className="w-full flex flex-col gap-4">
        <li className="flex justify-between items-center bg-neutral flex shadow-xl border border-gray-700 rounded-xl p-2">
          <div className="avatar">
            <div className="w-8 rounded-full sm:w-14">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
            </div>
          </div>
          <h1 className="text-xl">John Doe</h1>
          <input type="checkbox" className="checkbox checkbox-sm" />
        </li>
        {/* Liste a generer via .map */}
        <li className="flex justify-between items-center bg-neutral flex shadow-xl border border-gray-700 rounded-xl p-2">
          <div className="avatar">
            <div className="w-8 rounded-full sm:w-14">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
            </div>
          </div>
          <h1 className="text-xl">Denis Brogniard</h1>
          <input type="checkbox" className="checkbox checkbox-sm" />
        </li>
        <li className="flex justify-between items-center bg-neutral flex shadow-xl border border-gray-700 rounded-xl p-2">
          <div className="avatar">
            <div className="w-8 rounded-full sm:w-14">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
            </div>
          </div>
          <h1 className="text-xl">Alain Béssile</h1>
          <input type="checkbox" className="checkbox checkbox-sm" />
        </li>
        <li className="flex justify-between items-center bg-neutral flex shadow-xl border border-gray-700 rounded-xl p-2">
          <div className="avatar">
            <div className="w-8 rounded-full sm:w-14">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
            </div>
          </div>
          <h1 className="text-xl">Jay Rare</h1>
          <input type="checkbox" className="checkbox checkbox-sm" />
        </li>
        <li className="flex justify-between items-center bg-neutral flex shadow-xl border border-gray-700 rounded-xl p-2">
          <div className="avatar">
            <div className="w-8 rounded-full sm:w-14">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar" />
            </div>
          </div>
          <h1 className="text-xl">Jay Rare</h1>
          <input type="checkbox" className="checkbox checkbox-sm" />
        </li>
      </ul>
    </div>
  );
}

export default EventContactList;
