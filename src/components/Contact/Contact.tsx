import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import useFetch from '../hooks/useFetch';

import ContactList from './ContactList/ContactList';
import SearchContact from './SearchContact/SearchContact';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

function Contact() {
  const { user } = useContext(AuthContext);
  const id = user.userInfos.userId;

  const { loading, data: sentList, error } = useFetch(`user_friends/sent/${id}`);
  const { data: acceptedList } = useFetch(`user_friends/accepted/${id}`);
  const { data: pendingList } = useFetch(`user_friends/pending/${id}`);
  const contactList = [...sentList, ...acceptedList, ...pendingList];

  if (error) return null;

  return (
    <>
      <Header />
      <Menu />
      <div className="m-4 sm:w-3/5 sm:p-4 sm:m-auto sm:shadow-xl sm:border sm:rounded-xl sm:border-gray-700 sm:pb-4 sm:border-2 sm:mt-4">
        <SearchContact />
        {
          !loading
          && <ContactList contacts={contactList} />
        }
      </div>
    </>
  );
}

export default Contact;
