import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import EventListPreview from './EventListPreview/EventListPreview';
import NextEvent from './NextEvent/NextEvent';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';

function Profile() {
  const onLogOut = () => {
    console.log('LogOut pressed.'); // we will change it later
  };
  return (
    <>
      <Header />
      <Menu />
      <div className="h-content shadow-xl border-2 border-gray-700 rounded-xl mx-24 px-8">
        <div className="flex gap-6 py-6">
          <ProfileInfo />
          <EventListPreview />
        </div>
        <NextEvent />
      </div>
    </>
  );
}

export default Profile;
