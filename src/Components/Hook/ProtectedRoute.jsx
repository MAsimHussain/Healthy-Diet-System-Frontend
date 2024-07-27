import React, { useContext, useState} from 'react';
import { Navigate } from 'react-router-dom';
import { AuthProvider } from '../Context/UseContext';

const ProtectedRoute = ({ element, roles }) => {
  const  {user}  = useContext(AuthProvider)


  if (!user || !roles.includes(user.Role)) {
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;
