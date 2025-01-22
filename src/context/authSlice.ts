import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { user } from '../type/user/user';

interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshAccessToken: string | null;
  userInfo: user | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
  refreshAccessToken: null,
  userInfo: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ userInfo: user; accessToken: string; refreshAccessToken: string }>
    ) => {
      state.isAuthenticated = true;
      state.userInfo = action.payload.userInfo;
      state.accessToken = action.payload.accessToken;
      state.refreshAccessToken = action.payload.refreshAccessToken;

      // Persist tokens in localStorage
      localStorage.setItem('token', action.payload.accessToken);
      localStorage.setItem('refreshToken', action.payload.refreshAccessToken);
      localStorage.setItem('username', action.payload.userInfo.username);
    },
    updateTokens: (state, action: PayloadAction<{ accessToken: string; refreshAccessToken: string }>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshAccessToken = action.payload.refreshAccessToken;

      // Persist updated tokens in localStorage
      localStorage.setItem('token', action.payload.accessToken);
      localStorage.setItem('refreshToken', action.payload.refreshAccessToken);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userInfo = null;
      state.accessToken = null;
      state.refreshAccessToken = null;

      // Clear tokens from localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('username');
    },
  },
});

export const { login, updateTokens, logout } = authSlice.actions;
export default authSlice.reducer;
