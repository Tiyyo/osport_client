import React, { useContext } from 'react';
import axiosInstance from '../../services/axiosInstance';
import AuthContext from '../../context/AuthContext';
//
import ProfileInfo from './ProfileInfo/ProfileInfo';
import EventListPreview from './EventListPreview/EventListPreview';
import NextEvent from './NextEvent/NextEvent';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

function Profile() {

  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <>
      <Header />
      <Menu />
      <div className="flex flex-col px-4 my-auto sm:w-4/5 sm:m-auto sm:shadow-xl sm:border sm:rounded-xl sm:border-gray-700 sm:my-4 sm:pb-4">
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