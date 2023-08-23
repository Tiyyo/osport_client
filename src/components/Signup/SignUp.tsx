import axiosInstance from '../../services/axiosInstance';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

function SignUp() {

  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [cguChecked, setCguChecked] = useState(false);
  const [newsletterChecked, setNewsletterChecked] = useState(false);

  const regexes = {
    username: /^[a-zA-Z0-9_]+$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  };

  const testUsername = (value: string): boolean => regexes.username.test(value);
  const testPassword = (value: string): boolean => regexes.password.test(value);
  const testEmail = (value: string): boolean => regexes.email.test(value);

  const [isUsernameValid, setisUsernameValid] = useState<boolean>(true);
  const [isPasswordValid, setisPasswordValid] = useState<boolean>(true);
  const [isEmailValid, setisEmailValid] = useState<boolean>(true);
  const [isCguChecked, setisCguChecked] = useState<boolean>(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validUsername = testUsername(username);
    const validPassword = testPassword(password);
    const validEmail = testEmail(email);
  
    setisUsernameValid(validUsername);
    setisPasswordValid(validPassword);
    setisEmailValid(validEmail);
    setisCguChecked(cguChecked);

    if (validUsername && validPassword && validEmail && cguChecked) {

      console.log('datas are valid');

      console.log(username , password, email);

      const response = axiosInstance.post('/signup', {
        username: username,
        email: email,
        password: password,
      });

      console.log(response);

      if ((await response).status === 201) {

        login({
          name: username,
          password: password,
          email: email,
        });

        navigate('/');
      } else {
        alert('Erreur lors de la récupération des données serveur.');
      }

    } else {
      console.log('datas are invalid');

      console.log('username :' + testUsername(username));
      console.log('password :' + testPassword(password));
      console.log('email :' + testEmail(email));

      console.log('isUsernameValid :' + isUsernameValid);
      console.log('isPasswordValid :' + isPasswordValid);
      console.log('isEmailValid :' + isEmailValid);
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
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {!isUsernameValid ? <span className='text-red-600 text-xs italic mx-4 text-center'>
          Votre nom d'utilisateur doit contenir uniquement des lettres, des chiffres et des underscores.
          </span> : null }

        <div className="form-control w-full max-w-xs m-1">
          <label className="label" htmlFor="password">
            <span className="label-text">Email : </span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Tapez ici"
            className="input input-bordered w-full max-w-xs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {!isPasswordValid ? <span className='text-red-600 text-xs italic mx-4 text-center mb-2'>
          Votre mot de passe doit contenir au moins 8 caractères, une lettre et un chiffre.
          </span> : null}

        <div className='flex flex-col items-start'>
          <div className="form-control">
            <label className="label cursor-pointer flex justify-start">
              <input 
              onChange={(e) => setCguChecked(e.target.checked)}
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
          Votre email doit être valide.
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
