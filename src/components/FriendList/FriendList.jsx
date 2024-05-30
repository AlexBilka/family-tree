import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friendData }) {
  return (
    <ul>
      {friendData.map(friend => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
