import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { EventContext } from '../../../context/EventContext';
import AuthContext from '../../../context/AuthContext';

function FriendsToInvite() {
  // On recupere l'id de l'user connecté
  const { user } = useContext(AuthContext);
  const id = user.userInfos.userId;

  const [friends, setFriends] = useState([]);

  const { eventData, setEventData } = useContext(EventContext);

  const baseUrl = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    const HandleSendInvitations = async () => {
      try {
        const response = await axios.get(`${baseUrl}/user_friends/accepted/${id}`);
        setFriends(response.data.friends);
      } catch (error) {
        console.error(error);
      }
    };

    HandleSendInvitations();
  }, [baseUrl, id]);

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
          avatar: avatarUrl,
        }],
      });
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full sm:w-1/2 sm:self-start bg-neutral-focus p-4 shadow-xl border rounded-xl border-gray-700 max-h-[500px] overflow-y-scroll">
      <h2 className="text-xl pb-6 sm:text-3xl">Chose participants</h2>
      <ul className="w-full flex flex-col gap-4">
        {friends.map((item) => (
          <li key={item.friend.username} className="flex justify-between items-center bg-neutral flex shadow-xl border border-gray-700 rounded-xl p-2">
            <div className="avatar">
              <div className="w-8 rounded-full sm:w-14">
                <img src={item.friend.avatar} alt="avatar" />
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
