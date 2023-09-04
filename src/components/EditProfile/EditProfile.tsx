import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import EditInfo from './EditInfo/EditInfo';
import EditLevel from './EditLevel/EditLevel';
import useFetch from '../hooks/useFetch';

function EditProfile() {
  const { user: { userInfos: { userId } } } = useContext(AuthContext);
  const { data: userInfos } = useFetch(`user/${userId}`, 'GET');

  return (
    <>
      <Header />
      <Menu />
      <div className="flex flex-col p-4 mb-28 sm:w-4/5 sm:m-auto sm:shadow-xl sm:rounded-xl sm:gap-4 sm:border-gray-700 sm:my-4 sm:pb-4 sm:flex-row sm:justify-between">
        <EditInfo avatar={userInfos?.image_url} />
        <div className="divider" />
        <EditLevel />
      </div>
    </>
  );
}

export default EditProfile;
