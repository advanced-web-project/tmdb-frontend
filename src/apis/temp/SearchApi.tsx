import axios from 'axios';
import { MovieResult } from '../../type/temp/search/movie';

const BASE_URL = import.meta.env.VITE_TMDB_API_URL;
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

export async function searchMovie(keyword: string, page: number): Promise<MovieResult> {
  try {
    const response = await axios.get<MovieResult>(`${BASE_URL}/search/movie`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      params: {
        query: keyword,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error when search movie:', error);
    throw error;
  }
}
