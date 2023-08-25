import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { useAuth } from '../../hooks/useAuth';
import axiosInstance from '../../services/axiosInstance'

export default function LogIn() {
  const { login } = useAuth();

  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [isServerValid, setisServerValid] = useState<boolean>(true);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const cleanUsername = DOMPurify.sanitize(username);
  
    setErrorMessages([]); // Reset error messages
  
    if (cleanUsername === '' || password === '') {
      setErrorMessages(['Veuillez remplir tous les champs.']);
      setisServerValid(false);
      return;
    }
  
    try {
      // Submit data to the servers
      const response = await axiosInstance.post('/signin', {
        username: cleanUsername,
        password: password,
      });

      console.log(response.data.error);
  
      if (response.status === 200 && response.data.error !== 'Invalid input') {
        login({ name: cleanUsername });
        navigate('/');
      } else {
        setErrorMessages(['Une erreur inattendue s\'est produite.']);
        setisServerValid(false);
      }
    } catch (e: any) {
        console.error('Une erreur s\'est produite lors de l\'attente de la réponse', e);
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
            onChange={(e) => {
              setUsername(e.target.value)
              setisServerValid(true)
            }}
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
            onChange={(e) => {
              setPassword(e.target.value)
              setisServerValid(true)
            }}
          />
        </div>

        {!isServerValid ? <span className='text-red-600 text-xs italic mx-4 text-center'>
          {errorMessages.map((message) => (
            message
          ))}
          </span> : null }

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
