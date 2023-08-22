import React, { useState } from 'react';

function SearchContact() {
  // InputValue => valeur de l'input via onChange
  // Search => recupere le username cherché pour le récuperer dans le back
  const [inputValue, setInputValue] = useState<string>('');
  const [search, setSearch] = useState<string | null>('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // On défini la valeur finale grâce à setSearch et à l'inputValue
    // (tel qu'il est au moment du submit)
    setSearch(inputValue);
    // On remet la valeur de l'input vide pour réinitialiser ce dernier
    setInputValue('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="lg:flex justify-evenly gap-4 shadow-xl border border-gray-700 rounded-xl p-4 max-[900px]:flex-col"
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type a username..."
        className="input input-bordered w-full max-w-xs"
      />
      <button type="submit" className="btn md:btn-md w-full lg:btn-wide">Add a friend</button>
    </form>
  );
}

export default SearchContact;
