// Import the axios library for making HTTP requests
import axios from 'axios';
// Import the showError function for displaying error messages
import { showError } from '../../util/ErrorToastifyRender';
import AuthRequest from '../../type/temp/auth/auth_request.type';
import AuthResponse from '../../type/temp/auth/auth_response.type';

// Get the backend URL from environment variables
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

/**
 * Logs in a user by sending a POST request to the backend
 *
 * @param {AuthRequest} authRequest - The authentication request data (e.g., username and password).
 * @returns {Promise<any>} - A promise resolving to the response data containing the access token,
 * or undefined if an error occurs.
 */
export const login = async (authRequest: AuthRequest): Promise<any> => {
  try {
    // Send a POST request to the backend to log in the user
    const response = await axios.post(`${BACKEND_URL}/auth/login`, authRequest);
    return response.data; // Return the response data from the backend
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Extract the error message from Axios response
      const errorMessage = error.response.data?.error || 'An unexpected error occurred';
      showError(errorMessage); // Display the error message
    } else {
      // Handle other types of errors
      const errorMessage = (error as Error).message || 'An unexpected error occurred';
      showError(errorMessage); // Display the error message
    }
  }
};

/**
 * Refreshes the access token using the provided refresh token and username.
 *
 * @param {string} refreshToken - The refresh token used to get a new access token.
 * @param {string} username - The username of the user.
 * @returns {Promise<LoginResponse | undefined>} - A promise resolving to an object containing the new access token
 * and refresh token, or undefined if an error occurs.
 */
export const refreshAccessToken = async (refreshToken: string, username: string): Promise<AuthResponse | undefined> => {
  try {
    // Send a POST request to the refresh token endpoint
    const response = await axios.post(
      `${BACKEND_URL}/auth/refresh-token`,
      {
        refreshToken,
        username,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.status === 200) {
      return {
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
        user: response.data.user,
      };
    } else {
      const message = response.data.error || 'Failed to refresh access token';
      showError(message);
    }
  } catch (error) {
    const errorMessage = (error as Error).message || 'Failed to refresh access token';
    showError(errorMessage);
  }
};

/**
 * Authenticates a user using an authorization code.
 *
 * @param {string} authCode - The authorization code received from an external service.
 * @returns {Promise<AuthResponse | undefined>} - The authentication response or undefined if an error occurs.
 */
export const authenticateWithCode = async (authCode: string): Promise<AuthResponse | undefined> => {
  try {
    const response = await axios.post<AuthResponse>(`${BACKEND_URL}/auth/outbound/authentication`, null, {
      params: { code: authCode },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const errorMessage = error.response.data?.error || 'Authentication failed';
      showError(errorMessage);
    } else {
      const errorMessage = (error as Error).message || 'An unexpected error occurred';
      showError(errorMessage);
    }
  }
};
