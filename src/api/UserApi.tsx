// Import the axios library for making HTTP requests
import axios from 'axios';
// Import the showError function for displaying error messages
import { showError } from '../utility/ErrorToastifyRender';
import { refreshAccessToken } from './AuthApi';
import user from '../type/auth/user.type';
import AuthResponse from '../type/auth/auth_response.type';

// Get the backend URL from environment variables
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Register a new user
export const registerUser = async (user: user): Promise<user | undefined> => {
  try {
    const response = await axios.post(`${BACKEND_URL}/user/register`, user);
    return response.data; // Return the response data
  } catch (error: any) {
    const errorMessage = error?.response?.data?.error || error.message; // Get the error message
    showError(errorMessage); // Display the error message
    return undefined; // Return undefined in case of an error
  }
};

// Check if a username is unique
export const checkUsernameUniqueness = async (username: string): Promise<boolean> => {
  try {
    const response = await axios.get(`${BACKEND_URL}/user/check-unique-username/${username}`);
    return response.data; // Return the response data
  } catch (error: any) {
    const errorMessage = error?.response?.data?.error || error.message; // Get the error message
    showError(errorMessage); // Display the error message
    return false; // Return false in case of an error
  }
};

// Check if an email is unique
export const checkEmailUniqueness = async (email: string): Promise<boolean> => {
  try {
    const response = await axios.get(`${BACKEND_URL}/user/check-unique-email/${email}`);
    return response.data; // Return the response data
  } catch (error: any) {
    const errorMessage = error?.response?.data?.error || error.message; // Get the error message
    showError(errorMessage); // Display the error message
    return false; // Return false in case of an error
  }
};

// Get user by token
export const getUserByToken = async (
  token: string | null,
  refreshToken: string | null,
  username: string,
  updateTokens: (accessToken: string, refreshToken: string) => void,
): Promise<user | null> => {
  try {
    // Fetch user profile using the access token
    const response1 = await axios.get(`${BACKEND_URL}/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (response1.status !== 200) throw new Error('Failed to fetch profile');
    return response1.data;
  } catch (error: any) {
    if (error?.response?.status === 401) {
      // If the access token is expired, refresh it
      if (!refreshToken) throw new Error('Refresh token is null');
      const newTokens: AuthResponse | undefined = await refreshAccessToken(refreshToken, username);

      if (newTokens) {
        // Update the state with the new tokens
        updateTokens(newTokens.accessToken, newTokens.refreshToken);

        // Retry the request with the new access token
        const response2 = await axios.get(`${BACKEND_URL}/user/profile`, {
          headers: {
            Authorization: `Bearer ${newTokens.accessToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (response2.status !== 200) throw new Error('Failed to fetch profile with new token');
        return response2.data;
      } else {
        // If refresh token is also expired, redirect to login
        showError('Session expired. Please log in again.');
        return null;
      }
    }
    return null;
  }
};
