import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { LogInProps } from 'src/@types/osport';
import { useAuth } from '../../hooks/useAuth';

// export default function LogIn({ setIsLoggedIn }: LogInProps) {
export default function LogIn() {
  const { login } = useAuth();

  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const regexes = {
    username: /^[a-zA-Z0-9_]+$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  };

  const isValidUsername = (value: string): boolean => regexes.username.test(value);
  const isValidPassword = (value: string): boolean => regexes.password.test(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidUsername(username) && isValidPassword(password)) {
      // setIsLoggedIn(true);

      login({
        id: '1',
        name: username,
        password: password,
      });

      // Submit data to the server
      navigate('/');
    } else {
      alert('Une erreur est survenue.');
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
            placeholder=""
            className="input input-bordered w-full max-w-xs"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

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
}
