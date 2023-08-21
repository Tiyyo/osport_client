import React from 'react';

function Profile() {
  const onLogOut = () => {
    console.log('LogOut pressed.'); // we will change it later
  };
  return (
    <>
      <nav>
        <button type="button">Profile</button>
        <button type="button">Contact</button>
        <button type="button">Event</button>
      </nav>

      <div className="flex bg-blue-500">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="yo la team" />
          </div>
          <button type="button">Edit profile</button>
          <button type="button">Logout</button>
        </div>
        <h1>Name</h1>
      </div>
    </>
  );
}

export default Profile;
