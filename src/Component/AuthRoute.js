import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({ children, type }) => {
  const isAuthenticated = useSelector((state) => state.auth.user);

  if (type === 'private') {
    return isAuthenticated ? children : <Navigate to="/login" />;
  }

  if (type === 'public') {
    return !isAuthenticated ? children : <Navigate to="/documents" />;
  }

  return null;
};

export default AuthRoute;
