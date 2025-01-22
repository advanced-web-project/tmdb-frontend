import axiosInstance from './axios';
import { WatchList } from '../type/user-movie/WatchList';
import { ResponseWatchListDTO } from '../type/user-movie/ResponseWatchListDTO';
import { RequestWatchListDTO } from '../type/user-movie/RequestWatchListDTO';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const apiAddWatchlist = (data: RequestWatchListDTO): Promise<WatchList> =>
  axiosInstance({
    url: '/watchlists',
    method: 'post',
    data,
  });

export const apiGetWatchlistByUser = (): Promise<ResponseWatchListDTO[]> =>
  axiosInstance({
    url: '/watchlists',
    method: 'get',
  });

export const apiRemoveWatchlist = (movieId: number): Promise<void> =>
  axiosInstance({
    url: `/watchlists/${movieId}`,
    method: 'delete',
  });

export const useWatchlistByUser = () => {
  return useQuery({
    queryKey: ['watchlistByUser'],
    queryFn: apiGetWatchlistByUser,
  });
};

export const useAddWatchlist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: apiAddWatchlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
};

export const useRemoveWatchlist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: apiRemoveWatchlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
};