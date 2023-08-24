import { useEffect } from 'react';
import { useUser } from './useUser';
import { User } from '../@types/osport';
import { useLocalStorage } from './useLocalStorage';

// Ce hook de réaction est chargé de vérifier si l'utilisateur est connecté ou non, 
// et s'il l'est, il renvoit l'objet user stocké dans le localStorage. 
// Si l'utilisateur n'est pas connecté, il renvoit null. 
// Il met à disposition une fonction 'login' et une fonction 'logout' 
// que nous pouvons utiliser pour connecter et déconnecter l'utilisateur.

export const useAuth = () => {
  const { user, addUser, removeUser, setUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem('user');
    if (user) {
      addUser(JSON.parse(user));
    }
  }, []);

  const login = (user: User) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, logout, setUser };
};
