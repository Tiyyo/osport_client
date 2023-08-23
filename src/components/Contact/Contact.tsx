import React from 'react';
import ContactList from './ContactList/ContactList';
import SearchContact from './SearchContact/SearchContact';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

function Contact() {
  return (
    <>
      <Header />
      <Menu />
      <div className="m-4 sm:w-3/5 sm:p-4 sm:m-auto sm:shadow-xl sm:border sm:rounded-xl sm:border-gray-700 sm:pb-4 sm:border-2 sm:mt-4">
        <SearchContact />
        <ContactList />
      </div>
    </>
  );
}

export default Contact;
