import axiosInstance from './axios';
import { NavigationDto } from '../type/navigation/Navigation';
import { useQuery } from '@tanstack/react-query';

export const apiNavigationAI = (query: string, threshold?: number): Promise<NavigationDto> =>
  axiosInstance({
    url: '/navigation',
    method: 'get',
    params: { query, threshold },
  });

export const useNavigationAI = (query: string, threshold?: number) => {
  return useQuery({
    queryKey: ['navigation', query, threshold],
    queryFn: () => apiNavigationAI(query, threshold),
    enabled: !!query, // Only run the query if the query string is not empty
  });
};