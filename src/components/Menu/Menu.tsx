import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="flex w-full justify-center gap-2 py-2 fixed bottom-0 bg-neutral bg-opacity-90 sm:relative sm:-top-16 sm:w-fit sm:m-auto sm:bg-opacity-0 z-10">
      <Link to="/"><button type="button" className="btn sm:btn-sm">Profile</button></Link>
      <Link to="/contact"><button type="button" className="btn sm:btn-sm">Contacts</button></Link>
      <Link to="/event_list"><button type="button" className="btn sm:btn-sm">Event</button></Link>
    </nav>
  );
}

export default Menu;
