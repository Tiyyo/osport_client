import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="flex gap-4 p-4 justify-center">
      <Link to="/"><button type="button" className="btn">Profile</button></Link>
      <Link to="/contact"><button type="button" className="btn">Contacts</button></Link>
      <Link to="/event_list"><button type="button" className="btn">Event</button></Link>
    </nav>
  );
}

export default Menu;
