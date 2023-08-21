import React from 'react';

function Menu() {
  return (
    <nav className="flex gap-4 p-4 justify-center">
      <button type="button" className="btn">Profile</button>
      <button type="button" className="btn">Contact</button>
      <button type="button" className="btn">Event</button>
    </nav>
  );
}

export default Menu;
