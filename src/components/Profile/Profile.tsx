import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import EventListPreview from './EventListPreview/EventListPreview';
import NextEvent from './NextEvent/NextEvent';
import Menu from '../Menu/Menu';

function Profile() {
  return (
    <>
      <Menu />
      <div className="h-content shadow-xl border border-gray-700 rounded-xl mx-24 px-4">
        <div className="flex py-6">
          <ProfileInfo />
          <EventListPreview />
        </div>
        <NextEvent />
      </div>
    </>
  );
}

export default Profile;
