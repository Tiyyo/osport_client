import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <>
      <div className="flex justify-end mb-6 me-1 text-xs">
        <div>
          Déjà inscrit ? &nbsp;
          <Link to="/login" className="link link-info">
            Se connecter
          </Link>
        </div>
      </div>

      <div className="flex justify-center m-1">
        <img
          className="w-24 h-24"
          src="../../../public/imageedit_3_3008038748.png"
          alt="logo"
        />
      </div>

      <div className="text-2xl font-bold text-center m-1 mb-6">
        Se connecter à O'Sport
      </div>

      <div className="card w-100 bg-base-100 shadow-xl border border-gray-700 m-1 mb-6">
        <div className="form-control w-full max-w-xs m-1">
          <label className="label" htmlFor="username">
            <span className="label-text">Nom d'utilisateur : </span>
          </label>
          <input
            id="username"
            type="text"
            placeholder="Tapez ici"
            className="input input-bordered w-full max-w-xs"
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
          />
        </div>

        <div className="form-control">
          <label className="label cursor-pointer flex justify-start">
            <input type="checkbox" checked className="checkbox me-2" />
            <span className="label-text text-xs">
              J'accepte les
              <Link to="..." className="link link-info m-1">
                Conditions Générales d'Utilisation
              </Link>
            </span>
          </label>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer flex justify-start">
            <input type="checkbox" checked className="checkbox me-2" />
            <span className="label-text text-xs">
              J'accepte de recevoir des emails de la part d'O'Sport
            </span>
          </label>
        </div>

        <button type="button" className="btn btn-outline btn-success m-1">
          S'inscrire
        </button>
      </div>

      <div className="max-w-max text-xs">
        En savoir plus sur notre
        {' '}
        <Link to="..." className="">Politique de Confidentialité</Link>
        {' '}
        et l'
        <Link to="/" className="">Utilisation des cookies</Link>
      </div>

    </>
  );
}

export default SignUp;
