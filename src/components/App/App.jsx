import Profile from '../Profile/Profile';
import userData from '../../userData.json';

import FriendList from '../FriendList/FriendList';
import friendData from '../../friendData.json';

export default function App() {
  return (
    <>
      <Profile userData={userData} />
      <FriendList friendData={friendData} />
    </>
  );
}
