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



  // try {
  //   // Submit data to the servers
  //   const response = axiosInstance.get('/user/validate', { withCredentials: true });

  //   console.log(response);

  //   // if (response.status === 200 && response.data.error !== 'Invalid input') {
  //   //   login({ name: cleanUsername });
  //   //   navigate('/');
  //   // } else {
  //   //   setErrorMessages(['Une erreur inattendue s\'est produite.']);
  //   //   setisServerValid(false);
  //   // }
  // } catch (e: any) {
  //     console.error('Une erreur s\'est produite lors de l\'attente de la réponse', e);
  // }


  return (
    <>
      {/* <Header />
      <Menu />
      <div className="flex flex-col px-4 my-auto sm:w-4/5 sm:m-auto sm:shadow-xl sm:border sm:rounded-xl sm:border-gray-700 sm:my-4 sm:pb-4">
        <div className="flex flex-col gap-4 py-4 sm:flex-row">
          <ProfileInfo />
          <EventListPreview />
        </div>
        <NextEvent />
      </div> */}
    </>
  );
}

export default Profile;
