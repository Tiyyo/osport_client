import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import EventListPreview from './EventListPreview/EventListPreview';
import NextEvent from './NextEvent/NextEvent';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

function Profile() {
  const onLogOut = () => {
    console.log('LogOut pressed.'); // we will change it later
  };
  return (
    <>
      <Header />
      <Menu />
      <div className="flex flex-col px-4 my-auto sm:w-4/5 sm:m-auto sm:shadow-xl sm:border sm:rounded-xl sm:border-gray-700 sm:my-4 sm:pb-4 sm:border-2">
        <div className="flex flex-col gap-4 py-4 sm:flex-row">
          <ProfileInfo />
          <EventListPreview />
        </div>
        <NextEvent />
      </div>
    </>
  );
}

export default Profile;
