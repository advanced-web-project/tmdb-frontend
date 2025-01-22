import axiosInstance from './axios';
import { DataPageResponse } from '../type/page/DataPageResponse';
import { Person } from '../type/person/Person';
import { useQuery } from '@tanstack/react-query';

export const apiGetPersons = (page: number, size: number): Promise<DataPageResponse<Person>> =>
  axiosInstance({
    url: '/persons',
    method: 'get',
    params: { page, size },
  });

export const apiGetPersonById = (id: string): Promise<Person> =>
  axiosInstance({
    url: `/persons/${id}`,
    method: 'get',
  });

export const usePersons = (page: number, size: number) => {
  return useQuery({
    queryKey: ['persons', page, size],
    queryFn: () => apiGetPersons(page, size),
  });
};

export const usePersonById = (id: string) => {
  return useQuery({
    queryKey: ['person', id],
    queryFn: () => apiGetPersonById(id),
  });
};