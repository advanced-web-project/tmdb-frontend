import axiosInstance from './axios';
import { ResponseProfileDTO } from '../type/profile/ResponseProfileDTO';
import { user } from '../type/user/user';
import { useQuery } from '@tanstack/react-query';

export const apiGetProfile = (): Promise<ResponseProfileDTO> =>
  axiosInstance({
    url: '/profile',
    method: 'get',
  });

export const apiGetUserByAuthorization = (token: string): Promise<user> =>
  axiosInstance({
    url: '/profile/user',
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  export const useProfile = () => {
    return useQuery({ queryKey: ['profile'], queryFn: apiGetProfile });
  };
  
  export const useUserByAuthorization = (token: string) => {
    return useQuery({ queryKey: ['user', token], queryFn: () => apiGetUserByAuthorization(token) });
  };