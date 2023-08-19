import React from "react";
import { Link } from "react-router-dom";

interface LogInProps {} // Ceci est une interface vide car LogIn n'accepte aucune props

const LogIn: React.FC<LogInProps> = () => {
  return (
    <>
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
          <label className="label">
            <span className="label-text">Nom d'utilisateur : </span>
          </label>
          <input
            type="text"
            placeholder="Tapez ici"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs m-1">
          <label className="label">
            <span className="label-text">Mot de passe : </span>
          </label>
          <input
            type="password"
            placeholder="Tapez ici"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <Link to="" className="link link-info m-1 text-sm">
          Mot de passe oublié ?
        </Link>

        <button className="btn btn-outline btn-success m-1">
          Se connecter
        </button>
      </div>

      <div className="container border border-white rounded-lg m-1 p-3">
        Nouveau sur O'Sport ? &nbsp;
        <Link to="/signup" className="link link-info">
          Créer un compte
        </Link>
      </div>
    </>
  );
};

export default LogIn;
