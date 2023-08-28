import React from 'react';

function SendInvitations() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-8 px-0 bg-neutral-focus p-4 shadow-xl border rounded-xl border-gray-700 sm:w-1/2 sm:h-fit">
      <h2 className="text-sm">
        <span className="badge badge-base-100 badge-lg mx-2 p-2">1</span>
        players on
        <span className="badge badge-base-100 badge-lg mx-2 p-2">10</span>
        required
      </h2>
      <button type="button" className="btn btn-wide">Send Invitations</button>
    </div>
  );
}

export default SendInvitations;
