import axiosInstance from './axios';
import { DataPageResponse } from '../type/page/DataPageResponse';
import { SearchedFilteredMovie } from '../type/search/Searched&FilteredMovie';
import { RequestSearchFilterMovie } from '../type/search/RequestSearch&FilterMovie';
import { useQuery } from '@tanstack/react-query';

export const apiSearchAndFilterMovie = (
  data: RequestSearchFilterMovie,
  page: number,
  size: number,
): Promise<DataPageResponse<SearchedFilteredMovie>> =>
  axiosInstance({
    url: '/search/movie',
    method: 'post',
    data,
    params: { page, size },
  });

export const useSearchAndFilterMovie = (data: RequestSearchFilterMovie, page: number, size: number) => {
  return useQuery({
    queryKey: ['searchAndFilterMovie', data, page, size],
    queryFn: () => apiSearchAndFilterMovie(data, page, size),
    enabled: !!data, // Only run the query if the data is not empty
  });
};