import { Tabs, TabsList, TabsTrigger } from '../../components/shared/tabs';
// import { useNavigate } from 'react-router-dom';
// import { getUserByToken } from '../../api/UserApi';
// import { useAuth } from '../../context/auth-context';
// import { showError } from '../../utility/ErrorToastifyRender';
import { useEffect, useState } from 'react';

import HeaderProfile from '../../components/page/profile/overview/header-profile';
import StaticSection from '../../components/page/profile/overview/statics';
import FavoriteSection from '../../components/page/profile/favorite/favorite-section';
import RatingSection from '../../components/page/profile/rating/rating-section';

const exampleUser = {
  username: 'Minh Hoang 123',
  email: 'john.doe@example.com',
  password: 'securepassword123',
  confirmPassword: 'securepassword123',
  profile: 'https://res.cloudinary.com/dt0ps34k9/image/upload/v1733309869/vxrvgd9pbnkk8iei2xpx.jpg',
};

const ProfilePage: React.FC = () => {
  // const navigate = useNavigate();
  // const { accessToken, refreshAccessToken, userInfo, updateTokens, updateAfterLogout } = useAuth();
  const [tab, setTab] = useState('overview');

  // useEffect(() => {
  //   const fetchUserInfo = async () => {
  //     try {
  //       if (!userInfo?.username) {
  //         throw new Error('Username is undefined');
  //       }
  //       const userData = await getUserByToken(accessToken, refreshAccessToken, userInfo.username, updateTokens);
  //       if (userData?.username) {
  //         setUserInfo(userData);
  //       } else if (!userData) {
  //         showError('User not found');
  //         updateAfterLogout();
  //         navigate('/login');
  //       }
  //     } catch (error) {
  //       showError((error as Error).message);
  //       updateAfterLogout();
  //       navigate('/login');
  //     }
  //   };
  //   fetchUserInfo();
  // }, [accessToken, refreshAccessToken, userInfo?.username, updateTokens, updateAfterLogout, navigate]);

  // if (!user) {
  //   return <Spinner alignStyle={'flex justify-center items-center mt-6'} loading={true} />;
  // }

  return (
    <>
      {/* Profile Header */}
      <HeaderProfile user={exampleUser} />

      {/* Tabs */}
      <Tabs defaultValue="overview" className="px-8">
        <TabsList className="bg-transparent border-b border-gray-700 w-full justify-start rounded-none h-auto">
          <TabsTrigger
            onClick={() => setTab('overview')}
            value="overview"
            className="data-[state=active] data-[state=active]:border-b-2 data-[state=active]:border-pink-500 rounded-none"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setTab('favorite')}
            value="favorite"
            className="data-[state=active] data-[state=active]:border-b-2 data-[state=active]:border-pink-500 rounded-none"
          >
            Favorite
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setTab('ratings')}
            value="ratings"
            className="data-[state=active] data-[state=active]:border-b-2 data-[state=active]:border-pink-500 rounded-none"
          >
            Ratings
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setTab('watchlist')}
            value="watchlist"
            className="data-[state=active] data-[state=active]:border-b-2 data-[state=active]:border-pink-500 rounded-none"
          >
            Watchlist
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Static Section */}
      {tab == 'overview' && <StaticSection />}
      {tab == 'favorite' && <FavoriteSection />}
      {tab == 'ratings' && <RatingSection />}
    </>
  );
};

export default ProfilePage;
