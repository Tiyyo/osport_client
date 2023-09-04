import React, { useContext } from 'react';
import useFetch from '../../hooks/useFetch';
import { EventContext } from '../../../context/EventContext';
import AuthContext from '../../../context/AuthContext';
// import PlayerDefaultIcon from '../../../assets/PlayerDefaultIcon.svg';
// We accept only picsum url for faker user or
// pixabay for user without avatar
import userAvatarOrigin from '../../../utils/regex';

function FriendsToInvite() {
  // On recupere l'id de l'user connecté
  const { user } = useContext(AuthContext);
  const id = user.userInfos.userId;

  // const [friends, setFriends] = useState([]);

  const { eventData, setEventData } = useContext(EventContext);
  const { data: friends/* , error: friendsError, loading: friendsLoading */ } = useFetch(`user_friends/accepted/${id}`, 'GET');

  const baseUrl = import.meta.env.VITE_SERVER_URL;

  const handleCheckboxChange = (friendId, friendUsername, avatarUrl) => {
    const isFriendSelected = eventData.friends.some((friend) => friend.id === friendId);

    if (isFriendSelected) {
      // If friend is already in the list, remove it
      setEventData({
        ...eventData,
        friends: eventData.friends.filter((friend) => friend.id !== friendId),
      });
    } else {
      // If friend is not in the list, add it
      setEventData({
        ...eventData,
        friends: [...eventData.friends, {
          id: friendId,
          username: friendUsername,
          avatar: userAvatarOrigin.test(avatarUrl)
          ? avatarUrl
          : baseUrl + avatarUrl,
        }],
      });
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full sm:w-1/2 sm:self-start bg-neutral-focus p-4 shadow-xl border rounded-xl border-gray-700 max-h-[500px] overflow-y-scroll">
      <h2 className="text-xl pb-6 sm:text-3xl">Chose participants</h2>
      <ul className="w-full flex flex-col gap-4">
        {friends && friends.map((item) => (
          <li key={item.friend.username} className="flex justify-between items-center bg-neutral  shadow-xl border border-gray-700 rounded-xl p-2">
            <div className="avatar">
              <div className="w-8 rounded-full sm:w-14">
                <img
                  src={userAvatarOrigin.test(item.friend.avatar)
                  ? item.friend.avatar
                  : baseUrl + item.friend.avatar}
                  alt={`${item.friend.username} avatar`}
                />
              </div>
            </div>
            <h1 className="text-xl">{item.friend.username}</h1>
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              value={item.friend.id}
              onChange={(e) => handleCheckboxChange(
                e.target.value,
                item.friend.username,
                item.friend.avatar,
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendsToInvite;
