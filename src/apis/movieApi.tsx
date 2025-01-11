import axiosInstance from './axios';
import { DataPageResponse } from '../type/page/DataPageResponse';
import { Movie } from '../type/movie/Movie';

export const apiGetMovieById = (id: string): Promise<Movie> =>
  axiosInstance({
    url: `/movies/${id}`,
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
