import React from 'react';
import { Link } from 'react-router-dom';

interface LogInProps {
  setIsLoggedIn: (loggedIn: boolean) => void;
}

const LogIn: React.FC<LogInProps> = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const regexes = {
    username: /^[a-zA-Z0-9_]+$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  };

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     setIsLoggedIn(true);
  //   };

// A régler : le type de retour de la fonction LogIn
function LogIn(): React.FC<LogInProps> | any {
  return (
    <>
      <div className="flex justify-center m-1">
        <img
          className="w-24 h-24"
          src="/imageedit_3_3008038748.png"
          alt="logo"
        />
      </div>

      <div className="text-2xl font-bold text-center m-1 mb-6">
        Se connecter à O'Sport
      </div>

      <div className="card w-100 bg-base-100 shadow-xl border border-gray-700 m-1 mb-6">
        <div className="form-control w-full max-w-xs m-1">
          <label className="label" htmlFor="first-name">
            <span className="label-text">Nom d'utilisateur : </span>
          </label>
          <input
            id="first-name"
            type="text"
            placeholder="Tapez ici"
            className="input input-bordered w-full max-w-xs"
            type="text"
            name="username"
            value={username}
            placeholder=""
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-control w-full max-w-xs m-1">
          <label className="label" htmlFor="password">
            <span className="label-text">Mot de passe : </span>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Tapez ici"
            className="input input-bordered w-full max-w-xs"
            type="password"
            name="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Link to="/" className="link link-info m-1 text-sm">
          Mot de passe oublié ?
        </Link>

        <button type="button" className="btn btn-outline btn-success m-1">
          Se connecter
        </button>
      </div>

      <div className="container border border-white rounded-lg m-1 p-3 text-sm">
        Nouveau sur O'Sport ? &nbsp;
        <Link to="/signup" className="link link-info">
          Créer un compte
        </Link>
      </div>
    </>
  );
}

export default LogIn;
