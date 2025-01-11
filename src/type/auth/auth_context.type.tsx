import { User } from '../user/user';
export default interface AuthContextType {
  isAuthenticated: boolean;
  userInfo: User | null;
  accessToken: string | null;
  refreshAccessToken: string | null;
  updateTokens: (token: string, refreshAccessToken: string) => void;
  updateAfterLogin: (user: User, token: string, refreshAccessToken: string) => void;
  updateAfterLogout: () => void;
}
