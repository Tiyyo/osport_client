import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const RedirectToProfile = () => {
  const { isAuth } = useContext<{ isAuth : boolean }>(AuthContext);

  if (isAuth === null) return <>Loading...</>;

  return isAuth ? <Navigate to="/" /> : <Outlet />;
};

export default RedirectToProfile;
