import axios from 'axios';
import MovieDetails from '../type/movie/movie_detail.type';
import MovieRecommendation from '../type/movie/movie_recommendation';
import { MovieReviews } from '../type/movie/review.type';
import { MovieKeywords } from '../type/movie/keyword.type';
import TrendingMovies from '../type/movie/movie_trending.type';

const BASE_URL = import.meta.env.VITE_TMDB_API_URL;
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN; // Replace with your TMDb bearer token

export async function fetchMovieDetails(movieId: string): Promise<MovieDetails> {
  try {
    const response = await axios.get<MovieDetails>(`${BASE_URL}/movie/${movieId}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
}

export async function movieRecommendationPerMovie(movieId: string): Promise<MovieRecommendation> {
  try {
    const response = await axios.get<MovieRecommendation>(
      `${BASE_URL}/movie/${movieId}/recommendations?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movie recommendation:', error);
    throw error;
  }
}

export async function movieKeywords(movieId: string): Promise<MovieKeywords> {
  try {
    const response = await axios.get<MovieKeywords>(`${BASE_URL}/movie/${movieId}/keywords`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie keyword:', error);
    throw error;
  }
}

export async function movieReviews(movieId: string): Promise<MovieReviews> {
  try {
    const response = await axios.get<MovieReviews>(`${BASE_URL}/movie/${movieId}/reviews?language=en-US`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
}

export async function fetchTrendingMovies(timeWindow: 'day' | 'week'): Promise<TrendingMovies[]> {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/${timeWindow}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
}
