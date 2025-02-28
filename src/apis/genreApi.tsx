import axiosInstance from './axios';
import { Genre } from '../type/movie/Genre';
import { useQuery } from '@tanstack/react-query';

export const apiGetGenres = (): Promise<Genre[]> =>
  axiosInstance({
    url: '/genres',
    method: 'get',
  });

export const useGenres = () => {
  return useQuery({
    queryKey: ['genres'],
    queryFn: apiGetGenres,
  });
};