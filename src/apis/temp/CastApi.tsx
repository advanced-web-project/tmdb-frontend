import axios from 'axios';
import MovieCredits from '../../type/temp/cast/cast.type';

const BASE_URL = import.meta.env.VITE_TMDB_API_URL;
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN; // Replace with your TMDb bearer token

export async function listCastPerMovie(movieId: string): Promise<MovieCredits> {
  try {
    const response = await axios.get<MovieCredits>(`${BASE_URL}/movie/${movieId}/credits?language=en-US&page=1`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie credits', error);
    throw error;
  }
}
