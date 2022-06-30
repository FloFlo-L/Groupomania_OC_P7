import React, { useState } from 'react';
import SignIn from './signIn';

export default function SignUp() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function nomErrorInput(input, error) {
    if (input.length === 0) {
      error.innerHTML = "Vous n'avez pas renseigné votre Nom";
    } else {
      error.innerHTML = '';
    }
  }
  function prenomErrorInput(input, error) {
    if (input.length === 0) {
      error.innerHTML = "Vous n'avez pas renseigné votre Prénom";
    } else {
      error.innerHTML = '';
    }
  }
  function emailErrorInput(input, error) {
    if (input.length === 0) {
      error.innerHTML = "Vous n'avez pas renseigné votre Email";
    } else {
      error.innerHTML = '';
    }
  }
  function passwordErrorInput(input, error) {
    if (input.length === 0) {
      error.innerHTML = "Vous n'avez pas renseigné votre Mot de passe";
    } else {
      error.innerHTML = '';
    }
  }

  function login(e) {
    e.preventDefault();
    const error = document.querySelector('.error');
    const errorNom = document.querySelector('.error-nom');
    const errorPrenom = document.querySelector('.error-prenom');
    const errorEmail = document.querySelector('.error-email');
    const errorPassword = document.querySelector('.error-password');

    nomErrorInput(nom, errorNom);
    prenomErrorInput(prenom, errorPrenom);
    emailErrorInput(email, errorEmail);
    passwordErrorInput(password, errorPassword);

  }

  return (
  
    <div>
    <br />

    <form action="" onSubmit={login} id="signup">
      <div className="row">
        <div className="input-field col s6">
          <input
            type="text"
            id="nom"
            name="nom"
            onChange={(e) => setNom(e.target.value)}
            value={nom}
          />
          <label htmlFor="nom">Nom</label>
          <div className="error-nom"></div>
        </div>
        <div className="input-field col s6">
          <input
            type="text"
            id="prenom"
            name="prenom"
            onChange={(e) => setPrenom(e.target.value)}
            value={prenom}
          />
          <label htmlFor="prenom">Prénom</label>
          <div className="error-prenom"></div>
        </div>
      </div>

      <div className="input-field">
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="email">Email</label>
        <div className="error-email"></div>
      </div>

      <br />

      <div className="input-field">
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <label htmlFor="password">Mot de passe</label>
        <div className="error-password"></div>
      </div>

      <br />

      <input
        type="submit"
        value="S'inscrire"
        className="btn btn-signin"
      />
      <br />
      <br />
      <div className="error"></div>
    </form>
    </div>
  );
}
