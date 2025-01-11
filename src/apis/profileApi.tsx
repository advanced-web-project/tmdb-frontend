import axiosInstance from './axios';
import { ResponseProfileDTO } from '../type/profile/ResponseProfileDTO';

export const apiGetProfile = (): Promise<ResponseProfileDTO> =>
  axiosInstance({
    url: '/profile',
    method: 'get',
  });
