import React from 'react';

function SendInvitations() {
  return (
    <div className="flex flex-col mt-4 mb-16 justify-center items-center w-full gap-8 py-4 sm:w-1/2 sm:my-4">
      <h2 className="text-xl">
        <span className="badge badge-neutral badge-lg mx-2">1</span>
        players on
        <span className="badge badge-neutral badge-lg mx-2">10</span>
        required
      </h2>
      <button type="button" className="btn btn-wide">Send Invitations</button>
    </div>
  );
}

export default SendInvitations;
