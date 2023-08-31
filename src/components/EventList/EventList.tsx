import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';
import useFetch from '../hooks/useFetch';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import CreateEventButton from './CreateEventButton/CreateEventButton';
import List from './List/List';

function EventList() {
  // On recupere l'id de l'user connecté
  const { user } = useContext(AuthContext);
  const id = user.userInfos.userId;

  // On recupere la liste des events de l'user connecté
  const { data: list, error: eventsError } = useFetch(`event/${id}`, 'GET');
  const [eventList, setEventList] = useState();

  // Le useEffect permet de mettre à jour la liste des events à chaque fois que la page est chargée
  useEffect(() => {
    if (list) {
      setEventList(list);
  }
  }, [list]);
  if (eventsError) return null;

  return (
    <>
      <Header />
      <Menu />
      <div className="flex flex-col items-center p-4 mb-28 sm:w-4/5 sm:m-auto sm:shadow-xl sm:border sm:rounded-xl sm:border-gray-700 sm:my-4 sm:pb-4 sm:border-2">
        <CreateEventButton />
        <List events={eventList} userId={id} />
      </div>
    </>
  );
}

export default EventList;
