import React from 'react';
import { Link } from 'react-router-dom';

function CreateEventButton() {
  return (
    <Link to="/create_event">
      <button type="button" className="btn sm:btn sm:btn-wide">Create a new game</button>
    </Link>
  );
}

export default CreateEventButton;
