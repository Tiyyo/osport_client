import {
 createContext, useState, FunctionComponent, ReactNode, useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axiosInstance from '../services/axiosInstance';

// Définir le type pour le contexte
interface AuthContextProps {
  user: UserProfile | null;
  logUser: (cleanUsername: string, password: string) => Promise<string>;
}

interface UserInfo {
  userId: number;
}

interface UserProfile {
  message: string;
  userInfos: UserInfo;
}

// Définir le type pour les props du fournisseur du contexte
interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthContextProvider: FunctionComponent<AuthContextProviderProps> = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [user, setUser] = useState<UserProfile | null>(cookies.user || null);

  useEffect(() => {
    setCookie('user', user);
  }, [user, setCookie]);

  const navigate = useNavigate();

  const logUser = async (cleanUsername: string, password: string): Promise<string> => {
    let errorMessage = '';

    try {
      const response = await axiosInstance.post('/signin', {
        username: cleanUsername,
        password,
      });

      if (response.status === 200 && response.data.error !== 'Bad credentials') {
        try {
          const apiResponse = await axiosInstance.get('/user/validate');
          if (apiResponse.status === 200) {
            storeCredentials(apiResponse.data);
          } else {
            errorMessage = 'Une erreur inattendue s\'est produite lors de la récupération de vos données.';
          }
        } catch (e) {
          console.error('Une erreur s\'est produite lors de la récupération des données de l\'utilisateur', e);
        }
      } else if (response.status === 200 && response.data.error.includes('Invalid input')) {
        errorMessage = 'Votre nom d\'utilisateur ou votre mot de passe est incorrect.';
      } else {
        errorMessage = 'Une erreur inattendue s\'est produite lors de la connexion au serveur.';
      }
    } catch (e) {
      console.error('Une erreur s\'est produite lors de l\'attente de la réponse', e);
    }

    return errorMessage;
  };

  const storeCredentials = (payload: UserProfile): void => {
    setUser(payload);
    setCookie('user', payload);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, logUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
