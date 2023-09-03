import React, {
 useState, useContext, FormEvent, ChangeEvent,
} from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
//
import AuthContext from '../../context/AuthContext';

const LogIn: React.FC = () => {
  const { logUser } = useContext(AuthContext);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isServerValid, setIsServerValid] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const resetValidationStates = () => {
    setErrorMessage(''); // Reset error messages
    setIsServerValid(true); // Reset validation state
  };

  const handleInputChange = (
    setter: React.Dispatch<React.SetStateAction<string>>,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setter(event.target.value);
    setIsServerValid(true); // Reset validation state
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const cleanUsername = DOMPurify.sanitize(username);
    resetValidationStates();

    if (!cleanUsername || !password) {
      setErrorMessage('Veuillez remplir tous les champs.');
      setIsServerValid(false);
      return;
    }

    const result = await logUser(cleanUsername, password);

    if (result) {
      setErrorMessage(result);
      setIsServerValid(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e as unknown as FormEvent); // Casting nécessaire pour satisfaire les types
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center m-1">
        <img className="w-24 h-24" src="/imageedit_3_3008038748.png" alt="logo" />
      </div>

      <div className="text-2xl font-bold text-center m-1 mb-6">Se connecter à O'Sport</div>

      <form className="flex flex-col items-center w-96 bg-base-100 shadow-xl border border-gray-700 m-1 mb-6 rounded-xl">
        <div className="form-control w-full max-w-xs m-1 mt-4">
          <label className="label" htmlFor="first-name">
            <span className="label-text">Nom d'utilisateur : </span>
          </label>
          <input
            id="first-name"
            type="text"
            className="input input-bordered w-full max-w-xs"
            name="username"
            placeholder=""
            value={username}
            onChange={(e) => handleInputChange(setUsername, e)}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="form-control w-full max-w-xs m-1">
          <label className="label" htmlFor="password">
            <span className="label-text">Mot de passe : </span>
          </label>
          <input
            id="password"
            type="password"
            placeholder=""
            className="input input-bordered w-full max-w-xs"
            name="password"
            value={password}
            onChange={(e) => handleInputChange(setPassword, e)}
            onKeyDown={handleKeyDown}
          />
        </div>

        {!isServerValid ? (
          <span className="text-red-600 text-xs italic mx-4 text-center">
            {errorMessage}
          </span>
) : null }

        <div className="flex w-full justify-end max-w-xs m-1">
          <Link to="/" className="link link-info text-sm bloc ">
            Mot de passe oublié ?
          </Link>
        </div>

        <button type="button" className="btn btn-outline btn-success m-4" onClick={handleSubmit}>
          Se connecter
        </button>
      </form>

      <div className="container text-center w-96 border border-white rounded-lg m-1 p-3 text-sm">
        Nouveau sur O'Sport ? &nbsp;
        <Link to="/signup" className="link link-info">
          Créer un compte
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
