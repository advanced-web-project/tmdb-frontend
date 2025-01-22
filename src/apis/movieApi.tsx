import axiosInstance from './axios';
import { DataPageResponse } from '../type/page/DataPageResponse';
import { Movie } from '../type/movie/Movie';
import { TrailerWithMovieInfo } from '../type/movie/TrailerWithMovieInfo';
import { useQuery } from '@tanstack/react-query';

export const apiGetMovieById = (id: string): Promise<Movie> =>
  axiosInstance({
    url: `/movies/${id}`,
    method: 'get',
  });

export const apiGetMovieByTmdbId = (id: string): Promise<Movie> =>
  axiosInstance({
    url: `/movies/tmdb/${id}`,
    method: 'get',
  });

export const apiGetTrendingMovies = (type: string, page: number, size: number): Promise<DataPageResponse<Movie>> =>
  axiosInstance({
    url: `/movies/trending/${type}`,
    method: 'get',
    params: { page, size },
  });

export const apiGetMovies = (page: number, size: number): Promise<DataPageResponse<Movie>> =>
  axiosInstance({
    url: '/movies',
    method: 'get',
    params: { page, size },
  });

export const apiGetCategoriesMovies = (type: string, page: number, size: number): Promise<DataPageResponse<Movie>> =>
  axiosInstance({
    url: `/movies/categories/${type}`,
    method: 'get',
    params: { page, size },
  });

export const apiGetLastTrailersByCategories = (
  type: string,
  page: number,
  size: number,
): Promise<DataPageResponse<TrailerWithMovieInfo>> =>
  axiosInstance({
    url: `/movies/lasttrailers/categories/${type}`,
    method: 'get',
    params: { page, size },
  });

export const apiGetHistoryMovies = (): Promise<Movie[]> =>
  axiosInstance({
    url: `/movies/recommendation`,
    method: 'get',
  });

export const apiGetSimilarMovies = (tmdbId: number): Promise<Movie[]> =>
  axiosInstance({
    url: `/movies/similar/${tmdbId}`,
    method: 'get',
  });

  export const useMovieById = (id: string) => {
    return useQuery({ queryKey: ['movie', id], queryFn: () => apiGetMovieById(id) });
  };
  
  export const useMovieByTmdbId = (id: string) => {
    return useQuery({ queryKey: ['movieTmdb', id], queryFn: () => apiGetMovieByTmdbId(id) });
  };
  
  export const useTrendingMovies = (type: string, page: number, size: number) => {
    return useQuery({ queryKey: ['trendingMovies', type, page, size], queryFn: () => apiGetTrendingMovies(type, page, size) });
  };
  
  export const useMovies = (page: number, size: number) => {
    return useQuery({ queryKey: ['movies', page, size], queryFn: () => apiGetMovies(page, size) });
  };
  
  export const useCategoriesMovies = (type: string, page: number, size: number) => {
    return useQuery({ queryKey: ['categoriesMovies', type, page, size], queryFn: () => apiGetCategoriesMovies(type, page, size) });
  };
  
  export const useLastTrailersByCategories = (type: string, page: number, size: number) => {
    return useQuery({ queryKey: ['lastTrailersByCategories', type, page, size], queryFn: () => apiGetLastTrailersByCategories(type, page, size) });
  };
  
  export const useHistoryMovies = () => {
    return useQuery({ queryKey: ['historyMovies'], queryFn: apiGetHistoryMovies });
  };
  
  export const useSimilarMovies = (tmdbId: number) => {
    return useQuery({ queryKey: ['similarMovies', tmdbId], queryFn: () => apiGetSimilarMovies(tmdbId) });
  };
