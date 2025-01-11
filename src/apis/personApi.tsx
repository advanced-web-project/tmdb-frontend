import axiosInstance from './axios';
import { DataPageResponse } from '../type/page/DataPageResponse';
import { Person } from '../type/person/Person';

export const getPersons = async (page: number, size: number): Promise<DataPageResponse<Person>> => {
  const response = await axiosInstance.get<DataPageResponse<Person>>('/persons', {
    params: { page, size },
  });
  return response.data;
};

export const getPersonById = async (id: string): Promise<Person> => {
  const response = await axiosInstance.get<Person>(`/persons/${id}`);
  return response.data;
};
