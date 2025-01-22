import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './context/store';
import { login, logout } from './context/authSlice';
import router from './router/router';
import { apiGetUserByAuthorization } from './apis/profileApi';
import { getAccessToken } from './util/authUtils';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { refreshAccessToken } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const fetchUserByAuthorization = async () => {
      const token = localStorage.getItem('token') ?? getAccessToken();
      console.log(token);
      if (token) {
        try {
          const user = await apiGetUserByAuthorization(token);
          dispatch(login({ userInfo: user, accessToken: token, refreshAccessToken: refreshAccessToken ?? '' }));
        } catch (error) {
          console.error(error);
          dispatch(logout());
        }
      }
    };
    fetchUserByAuthorization();
  }, []);

  return <RouterProvider router={router} />;
};

export default App;