import axiosInstance from './axios';
import { Rating } from '../type/user-movie/Rating';
import { ResponseRatingDTO } from '../type/user-movie/ResponseRatingDTO';
import { RequestRatingDTO } from '../type/user-movie/RequestRatingDTO';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const apiAddRating = (data: RequestRatingDTO): Promise<Rating> =>
  axiosInstance({
    url: '/ratings',
    method: 'post',
    data,
  });

export const apiGetRatingsByUser = (): Promise<ResponseRatingDTO[]> =>
  axiosInstance({
    url: '/ratings',
    method: 'get',
  });

export const apiDeleteRating = (movieId: number): Promise<void> =>
  axiosInstance({
    url: `/ratings/${movieId}`,
    method: 'delete',
  });

export const apiUpdateRating = (data: RequestRatingDTO): Promise<void> =>
  axiosInstance({
    url: '/ratings',
    method: 'put',
    data,
  });

export const useRatingsByUser = () => {
  return useQuery({
    queryKey: ['ratingsByUser'],
    queryFn: apiGetRatingsByUser,
  });
};

export const useAddRating = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: apiAddRating,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
};

export const useDeleteRating = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: apiDeleteRating,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
};

export const useUpdateRating = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: apiUpdateRating,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
};