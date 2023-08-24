import { useContext } from 'react';
import { User } from '../@types/osport';
import { AuthContext } from '../context/AuthContext';
import { useLocalStorage } from './useLocalStorage';

// Ce hook fait le lien entre le contexte et le localStorage.

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const addUser = (user: User) => {
    setUser(user);
    setItem('user', JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    setItem('user', '');
  };

  return { user, addUser, removeUser, setUser };
};
