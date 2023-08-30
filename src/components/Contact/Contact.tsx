import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import useFetch from '../hooks/useFetch';

import ContactList from './ContactList/ContactList';
import SearchContact from './SearchContact/SearchContact';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

function Contact() {
  // On recupere l'id de l'user connecté
  const { user } = useContext(AuthContext);
  const id = user.userInfos.userId;

  // On recupere la liste des amis de l'user connecté
  const { data: sentList, error: sentListError } = useFetch(`user_friends/sent/${id}`, 'GET');
  const { data: acceptedList } = useFetch(`user_friends/accepted/${id}`, 'GET');
  const { data: pendingList } = useFetch(`user_friends/pending/${id}`, 'GET');

  const [contactList, setContactList] = useState([]);

  // Le useEffect permet de mettre à jour la liste des contacts à chaque fois que
  // les listes d'amis sont mises à jour
  // On fusionne les 3 listes d'amis en une seule
 useEffect(() => {
  if (sentList && acceptedList && pendingList) {
      setContactList([...sentList, ...acceptedList, ...pendingList]);
    }
  }, [acceptedList, pendingList, sentList]);
  if (sentListError) return null;

  return (
    <>
      <Header />
      <Menu />
      <div className="m-4 mb-24 sm:w-3/5 sm:p-4 sm:m-auto sm:shadow-xl sm:border sm:rounded-xl sm:border-gray-700 sm:pb-4 sm:mt-4">
        <SearchContact userId={id} />
        <ContactList contacts={contactList} userId={id} />
      </div>
    </>
  );
}

export default Contact;
