import React from 'react';
import Menu from '../Menu/Menu';
import ContactList from './ContactList/ContactList';
import SearchContact from './SearchContact/SearchContact';
import Header from '../Header/Header';

function Contact() {
  return (
    <>
      <Header />
      <Menu />
      <div className="align-center w-3/6 h-content shadow-xl border-2 border-gray-700 rounded-xl mx-auto px-8 py-2 pb-6 max-[900px]:w-full">
        <ContactList />
        <SearchContact />
      </div>
    </>
  );
}

export default Contact;
