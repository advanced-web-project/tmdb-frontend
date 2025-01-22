import axiosInstance from './axios';
import { FavoriteList } from '../type/user-movie/FavoriteList';
import { ResponseFavoriteListDTO } from '../type/user-movie/ResponseFavoriteListDTO';
import { RequestFavoriteListDTO } from '../type/user-movie/RequestFavoriteListDTO';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const apiAddFavoriteList = (data: RequestFavoriteListDTO): Promise<FavoriteList> =>
  axiosInstance({
    url: '/favoritelists',
    method: 'post',
    data,
  });

export const apiGetFavoriteListByUser = (): Promise<ResponseFavoriteListDTO[]> =>
  axiosInstance({
    url: '/favoritelists',
    method: 'get',
  });

export const apiRemoveFavoriteList = (movieId: number): Promise<void> =>
  axiosInstance({
    url: `/favoritelists/${movieId}`,
    method: 'delete',
  });

export const useFavoriteListByUser = () => {
  return useQuery({
    queryKey: ['favoriteListByUser'],
    queryFn: apiGetFavoriteListByUser,
  });
};

export const useAddFavoriteList = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: apiAddFavoriteList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
};

export const useRemoveFavoriteList = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: apiRemoveFavoriteList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
};