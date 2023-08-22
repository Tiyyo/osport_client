import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="flex gap-4 p-4 justify-center">
      <button type="button" className="btn"><Link to="/">Profile</Link></button>
      <button type="button" className="btn"><Link to="/contact">Contact</Link></button>
      <button type="button" className="btn"><Link to="/event_list">Event</Link></button>
    </nav>
  );
}

export default Menu;
