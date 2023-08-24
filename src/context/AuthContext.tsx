import { createContext } from 'react';
import { User } from '../@types/osport';

// Créer le contexte qui permet d'accèder à l'user depuis n'importe quel composant
// ! Ce contexte n'est pas la même chose que le localStorage ...
// ... bien qu'il partage les mêmes informations

interface AuthContext {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: () => {},
});
