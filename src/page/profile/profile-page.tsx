import { Avatar, AvatarFallback, AvatarImage } from '../../components/shared/avatar';
import { Tabs, TabsList, TabsTrigger } from '../../components/shared/tabs';
import Progress from '../../components/shared/progress';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/shared/spinner';
import { getUserByToken } from '../../api/UserApi';
import { useAuth } from '../../context/auth-context';
import { showError } from '../../utility/ErrorToastifyRender';
import { useEffect, useState } from 'react';
import User from '../../type/auth/user.type';
import default_avatar from '../../assets/default_avatar.jpg';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { accessToken, refreshAccessToken, userInfo, updateTokens, updateAfterLogout } = useAuth();
  const [user, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        if (!userInfo?.username) {
          throw new Error('Username is undefined');
        }
        const userData = await getUserByToken(accessToken, refreshAccessToken, userInfo.username, updateTokens);
        if (userData?.username) {
          setUserInfo(userData);
        } else if (!userData) {
          showError('User not found');
          updateAfterLogout();
          navigate('/login');
        }
      } catch (error) {
        showError((error as Error).message);
        updateAfterLogout();
        navigate('/login');
      }
    };
    fetchUserInfo();
  }, [accessToken, refreshAccessToken, userInfo?.username, updateTokens, updateAfterLogout, navigate]);

  if (!user) {
    return <Spinner alignStyle={'flex justify-center items-center mt-6'} loading={true} />;
  }

  return (
    <>
      {/* Profile Header */}
      <div className="relative p-8 bg-gradient-to-br from-blue-950 to-purple-900">
        <div className="flex items-start gap-8">
          <Avatar className="w-32 h-32 border-4 border-white">
            {userInfo?.profile == null ? (
              <AvatarImage src={default_avatar} alt="User" />
            ) : (
              <AvatarImage src={userInfo?.profile} alt="User" />
            )}
            <AvatarFallback>MH</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-white text-3xl font-bold mb-2">{user.username}</h1>
            <p className="text-gray-300 mb-6">Member since December 2024</p>
            <div className="flex gap-8">
              <div className="text-center text-white">
                <div className="relative w-16 h-16 mb-2">
                  <Progress value={0} className="absolute w-16 h-16" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold">0</span>
                  </div>
                </div>
                <p className="text-sm">
                  Average
                  <br />
                  Movie Score
                </p>
              </div>
              <div className="text-center text-white">
                <div className="relative w-16 h-16 mb-2">
                  <Progress value={0} className="absolute w-16 h-16" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold">0</span>
                  </div>
                </div>
                <p className="text-sm">
                  Average
                  <br />
                  TV Score
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="px-8">
        <TabsList className="bg-transparent border-b border-gray-700 w-full justify-start rounded-none h-auto">
          <TabsTrigger
            value="overview"
            className="data-[state=active] data-[state=active]:border-b-2 data-[state=active]:border-pink-500 rounded-none"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="discussions"
            className="data-[state=active] data-[state=active]:border-b-2 data-[state=active]:border-pink-500 rounded-none"
          >
            Discussions
          </TabsTrigger>
          <TabsTrigger
            value="lists"
            className="data-[state=active] data-[state=active]:border-b-2 data-[state=active]:border-pink-500 rounded-none"
          >
            Lists
          </TabsTrigger>
          <TabsTrigger
            value="ratings"
            className="data-[state=active] data-[state=active]:border-b-2 data-[state=active]:border-pink-500 rounded-none"
          >
            Ratings
          </TabsTrigger>
          <TabsTrigger
            value="watchlist"
            className="data-[state=active] data-[state=active]:border-b-2 data-[state=active]:border-pink-500 rounded-none"
          >
            Watchlist
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Stats */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">Stats</h2>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg mb-4">Total Edits</h3>
            <div className="text-5xl font-bold text-pink-500">0</div>
          </div>
          <div>
            <h3 className="text-lg mb-4">Total Ratings</h3>
            <div className="text-5xl font-bold text-pink-500">0</div>
          </div>
          <div>
            <h3 className="text-lg mb-4">Most Watched Genres</h3>
            <p className="text-gray-400">You haven't logged any movies or TV shows.</p>
          </div>
        </div>
      </div>

      {/* Recent Discussions */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">Recent Discussions</h2>
        <div className="bg-white/5 rounded-lg p-4">
          <p className="text-gray-400">You are not watching any discussions.</p>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
