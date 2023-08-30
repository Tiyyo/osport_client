import React, { useState } from 'react';
import axiosInstance from '../../../services/axiosInstance';

function SearchContact(userId: number) {
  // InputValue => valeur de l'input via onChange
  // Search => recupere le username cherché pour le récuperer dans le back
  const [inputValue, setInputValue] = useState<string>('');
  async function addContact(id: number, contactUsername: string) {
    try {
      const res = await axiosInstance.post('user_friends/add', { userId: id, username: contactUsername });
      console.log('Server Response:', res);
      } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // On défini la valeur finale grâce à setSearch et à l'inputValue
    // (tel qu'il est au moment du submit)
    console.log(inputValue);
    addContact(userId, inputValue);
    console.log(inputValue);

    // On remet la valeur de l'input vide pour réinitialiser ce dernier
    setInputValue('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      // className="lg:flex justify-evenly gap-4 shadow-xl border border-gray-700 rounded-xl p-4"
      className="flex flex gap-4"
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type a username..."
        className="input input-bordered w-3/4"
      />
      <button type="submit" className="btn w-1/5 text-xs">Add a friend</button>
    </form>
  );
}

export default SearchContact;
