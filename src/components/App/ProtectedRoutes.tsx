import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const ProtectedRoutes = () => {
  const { isAuth } = useContext<{ isAuth : boolean }>(AuthContext);

if (isAuth === null) return <>Loading...</>;

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
