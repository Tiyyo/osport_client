import React, { useState, useContext, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import axiosInstance from '../../services/axiosInstance';
import AuthContext from '../../context/AuthContext';
import useValidation from '../hooks/useValidation'; // Import the custom hook

const SignUp: React.FC = () => {
  const { logUser } = useContext(AuthContext);

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [cguChecked, setCguChecked] = useState(false);
  const [newsletterChecked, setNewsletterChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const regexes = {
    username: /^[a-zA-Z0-9_-]{2,}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d`!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]{8,}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  };

  const [isUsernameValid, validateUsername] = useValidation(true, regexes);
  const [isPasswordValid, validatePassword] = useValidation(true, regexes);
  const [isEmailValid, validateEmail] = useValidation(true, regexes);
  const [isCguChecked, setIsCguChecked] = useState(true);
  const [isServerValid, setIsServerValid] = useState(true);

  const resetValidationStates = () => {
    setErrorMessage('');
    setIsServerValid(true);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    resetValidationStates();

    const isValidUsername = validateUsername(username, 'username');
    const isValidPassword = validatePassword(password, 'password');
    const isValidEmail = validateEmail(email, 'email');

    setIsCguChecked(cguChecked);

    if (isValidUsername && isValidPassword && isValidEmail && cguChecked) {
      const cleanUsername = DOMPurify.sanitize(username);
      const cleanEmail = DOMPurify.sanitize(email);

      try {
        const response = await axiosInstance.post('/signup', {
          username: cleanUsername,
          email: cleanEmail,
          password,
        });

        if (response.status === 201) {
          const loginResult = await logUser(cleanUsername, password);
          if (loginResult) {
            setErrorMessage(loginResult);
            setIsServerValid(false);
          }
        }
      } catch (error) {
        setErrorMessage('Une erreur inattendue s\'est produite lors de la connexion au serveur.');
        setIsServerValid(false);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e as unknown as FormEvent);  // Casting nécessaire pour satisfaire les types
    }
  };
  

  return (
    <div className="flex flex-col items-center">

      <div className="flex justify-center m-1">
        <img
          className="w-24 h-24"
          src="/imageedit_3_3008038748.png"
          alt="logo"
        />
      </div>

      <div className="text-2xl font-bold text-center m-1 mb-6">
        S'inscrire sur O'Sport
      </div>

      <form className="flex flex-col items-center w-96 bg-base-100 shadow-xl border border-gray-700 m-1 mb-6 rounded-xl">
        <div className="form-control w-full max-w-xs m-1">
          <label className="label" htmlFor="username">
            <span className="label-text">Nom d'utilisateur : </span>
          </label>
          <input
            id="username"
            type="text"
            placeholder="Tapez ici"
            className="input input-bordered w-full max-w-xs"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
              // validateUsername(e.target.value, 'username');
            }}
            onKeyDown={handleKeyDown}
          />
        </div>

        {!isUsernameValid ? <span className='text-red-600 text-xs italic mx-4 text-center'>
          Votre nom d'utilisateur doit contenir au moins 2 caractères et uniquement des lettres, des chiffres et des underscores.
          </span> : null }

        <div className="form-control w-full max-w-xs m-1">
          <label className="label" htmlFor="email">
            <span className="label-text">Email : </span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Tapez ici"
            className="input input-bordered w-full max-w-xs"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              // validateEmail(e.target.value, 'email');
            }}
            onKeyDown={handleKeyDown}
          />
        </div>

        {!isEmailValid ? <span className='text-red-600 text-xs italic mx-4 text-center'>
          Votre email doit être valide.
          </span> : null}

        <div className="form-control w-full max-w-xs m-1">
          <label className="label" htmlFor="password">
            <span className="label-text">Mot de passe : </span>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Tapez ici"
            className="input input-bordered w-full max-w-xs"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setErrorMessage('');
              // validatePassword(e.target.value, 'password');
            }}
            onKeyDown={handleKeyDown}
          />
        </div>

        {!isPasswordValid ? <span className='text-red-600 text-xs italic mx-4 text-center mb-2'>
          Votre mot de passe doit contenir au moins 8 caractères, une lettre et un chiffre et un caractère spécial.
          </span> : null}

        <div className='flex flex-col items-start'>
          <div className="form-control">
            <label className="label cursor-pointer flex justify-start">
              <input 
              onChange={(e) => {
                setCguChecked(e.target.checked)
                setIsCguChecked(true)
              }}
              type="checkbox" 
              checked= {cguChecked}
              name = 'cgu'
              className="checkbox me-2" />
              <span className="label-text text-xs">
                J'accepte les
                <Link to="..." className="link link-info m-1">
                  Conditions Générales d'Utilisation
                </Link>
              </span>
            </label>
          </div>

          {!isCguChecked ? <span className='text-red-600 text-xs italic mx-4 text-center'>
            Vous devez accepter les Conditions Générales d'Utilisation.
          </span> : null}

          <div className="form-control">
            <label className="label cursor-pointer flex justify-start">
              <input 
              onChange={(e) => setNewsletterChecked(e.target.checked)}
              type="checkbox" 
              checked= {newsletterChecked}
              className="checkbox me-2"
              name = 'newsletter' />
              <span className="label-text text-xs">
                J'accepte de recevoir des emails de la part d'O'Sport
              </span>
            </label>
          </div>
        </div>

        {!isServerValid ? <span className='text-red-600 text-xs italic mx-4 text-center'>
          {errorMessage}
          </span> : null }

        <button type="submit" className="btn btn-outline btn-success m-1 mb-4" onClick={handleSubmit}>
          S'inscrire
        </button>
      </form>

      <div className="container text-center w-96 border border-white rounded-lg m-1 p-3 mb-3 text-sm">
      Déjà inscrit ? &nbsp;
        <Link to="/login" className="link link-info">
          Se connecter
        </Link>
      </div>

      <div className="max-w-max text-xs mb-4">
        En savoir plus sur notre
        {' '}
        <Link to="..." className="link link-info">Politique de Confidentialité</Link>
        {' '}
        et l'
        <Link to="/" className="link link-info">Utilisation des cookies</Link>
      </div>

    </div>
  );
}

export default SignUp;