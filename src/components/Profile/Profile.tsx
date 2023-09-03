import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import EventListPreview from './EventListPreview/EventListPreview';
import NextEvent from './NextEvent/NextEvents';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import useFetch from '../hooks/useFetch';

function Profile() {
const { user: { userInfos: { userId } } } = useContext(AuthContext);
const { data: userInfos, error: userInfosError, loading: userInfosLoading } = useFetch(`user/${userId}`, 'GET');
const { data: sports, error: errorSport, loading: loadingSport } = useFetch(`user/sport/${userId}`, 'GET');
const { data: events, error: errorEvent, loading: loadingEvent } = useFetch(`event/${userId}`, 'GET');

const eventClosed = events?.slice(0, 3).filter((event) => event.status === 'closed');
const eventOpen = events?.filter((event) => event.status === 'open');
const eventsIds = eventClosed?.map((event) => event.id);

  return (
    <>
      <Header />
      <Menu />
      <div className="flex flex-col px-4 my-auto sm:w-4/5 sm:m-auto sm:shadow-xl sm:border sm:rounded-xl sm:border-gray-700 sm:my-4 sm:pb-4">
        <div className="flex flex-col gap-4 py-4 sm:flex-row">
          <ProfileInfo username={userInfos?.username} avatar={userInfos?.avatar} sports={sports} />
          <EventListPreview lastEvents={eventClosed} eventsIds={eventsIds} />
        </div>
        <NextEvent nextEvents={eventOpen} />
      </div>
    </>
  );
}

export default Profile;
