import { store } from '../context/store';

export const getAccessToken = () => {
  const state = store.getState();
  return state.auth.accessToken || '';
};
